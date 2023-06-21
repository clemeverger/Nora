'use client'

import Link from 'next/link'
import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function Signup() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.get('name'),
        age: Number(form.get('age')),
        email: form.get('email'),
        password: form.get('password'),
      }),
    })
    const { user } = await res.json()
    if (!user) return null
    await signIn('credentials', {
      email: user.email,
      password: form.get('password'),
      callbackUrl: '/home',
    })
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-3xl text-center mt-10'>S&apos;inscrire</h2>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4'
      >
        <label className='flex flex-col gap-2'>
          Prénom
          <input
            className='border border-gray-300 rounded-md px-4 py-2'
            type='text'
            name='name'
            required
          />
        </label>
        <label className='flex flex-col gap-2'>
          Age
          <input
            className='border border-gray-300 rounded-md px-4 py-2'
            type='number'
            name='age'
            required
          />
        </label>
        <label className='flex flex-col gap-2'>
          Adresse mail
          <input
            className='border border-gray-300 rounded-md px-4 py-2'
            type='text'
            name='email'
            required
          />
        </label>
        <label className='flex flex-col gap-2'>
          Mot de passe
          <input
            className='border border-gray-300 rounded-md px-4 py-2'
            type='password'
            name='password'
            required
          />
        </label>
        <input
          className='bg-fuchsia-500 text-white p-3 rounded-md'
          type='submit'
          value="S'inscrire"
        />
      </form>
      <button
        className='flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-md'
        onClick={() => signIn('google', { callbackUrl: '/home' })}
      >
        <FcGoogle />
        S&apos;inscrire avec google
      </button>
      <Link
        href='/signin'
        className='text-center bg-fuchsia-500 text-white p-3 rounded-md'
      >
        Se connecter
      </Link>
    </div>
  )
}
