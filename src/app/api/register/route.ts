import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const registerUserSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password should be minimum 6 characters'),
})

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { email, password } = registerUserSchema.parse(data)
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user !== null) throw new Error('User already exists')

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ user: newUser, message: 'User created successfully' })
  } catch (e: any) {
    return NextResponse.json({ user: null, message: 'Error creating user' }, { status: 500 })
  }
}
