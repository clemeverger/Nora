import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const registerUserSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password should be minimum 6 characters'),
  name: z.string().min(3, 'Name should be minimum 3 characters'),
  age: z.number().min(13, 'Age should be minimum 13 years'),
})

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { email, password, name, age } = registerUserSchema.parse(data)
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user !== null) throw new Error('User already exists')

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        name,
        age,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ user: newUser, message: 'User created successfully' })
  } catch (e: any) {
    console.log(e)
    return NextResponse.json({ user: null, message: 'Error creating user' }, { status: 500 })
  }
}
