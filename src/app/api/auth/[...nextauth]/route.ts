import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials

        if (!email || !password) return null

        const user = await prisma.user.findUnique({
          where: { email },
        })

        if (!user) return null

        const isPasswordValid = await bcrypt.compare(password, user.password!)

        if (!isPasswordValid) return null

        return user
      },
    }),
  ],
  callbacks: {
    session({ session, token }: any) {
      session.user.id = token.id
      session.user.username = token.username
      return session
    },
    jwt({ token, account, user }: any) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
        token.username = user.username
      }
      return token
    },
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET!,
}

const handler = NextAuth(authOptions as any)

export { handler as GET, handler as POST }
