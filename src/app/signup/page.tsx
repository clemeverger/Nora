'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
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
    <div className='flex flex-col gap-4 mb-4'>
      <h2 className='text-3xl text-center mt-10 text-primary_dark font-semibold'>S&apos;inscrire</h2>
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
        <label className='flex flex-row-reverse text-xs text-primary_dark gap-4'>
          Acceptez-vous que Nora utilise vos données personnelles pour les recherches scientifiques.....
          <input
            type='checkbox'
            name='accept'
            required
          />
        </label>
        <input
          className='bg-primary_dark text-primary p-3 rounded-md'
          type='submit'
          value="S'inscrire"
        />
      </form>
      <button
        className='flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-md'
        onClick={() => signIn('google', { callbackUrl: '/diag' })}
      >
        <FcGoogle />
        S&apos;inscrire avec google
      </button>
      <Link
        href='/signin'
        className='underline'
      >
        Vous avez déjà un compte ?
      </Link>
    </div>
  )
}
