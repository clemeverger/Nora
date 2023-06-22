'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FormEvent } from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function Signin() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      callbackUrl: '/home',
    })
  }
  return (
    <div className='h-full'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-evenly h-full'
      >
        <h2 className='text-3xl text-center mt-10 text-primary_dark font-semibold'>Se connecter</h2>
        <div className='flex flex-col gap-4'>
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
        </div>
        <input
          className='bg-primary_dark text-primary px-4 py-2 rounded-md mt-2'
          type='submit'
          value='Se connecter'
        />
        <button
          className='flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-md'
          onClick={() => signIn('google', { callbackUrl: '/home' })}
        >
          <FcGoogle />
          Se connecter avec google
        </button>
        <Link
          href='/signup'
          className='underline'
        >
          Vous n&apos;avez pas de compte ?
        </Link>
      </form>
    </div>
  )
}
