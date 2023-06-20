'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-evenly p-24'>
      <Link
        href={'/signup'}
        className='text-primary'
      >
        S&apos;inscrire
      </Link>
      <Link href={'/signin'}>Se connecter</Link>
      <Link href={'/signup'}>Continuer en tant qu&apos;inviter</Link>
      <Link href={'/diag'}>Diag</Link>
      <Link href={'/blog'}>Blog</Link>
    </div>
  )
}
