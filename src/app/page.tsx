'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-evenly'>
      <Image
        src={'/logo.svg'}
        alt={'logo'}
        width={250}
        height={250}
      />
      <div className='flex flex-col gap-4 w-full'>
        <Link
          href={'/signin'}
          className='bg-primary_dark text-primary rounded-xl p-3 text-center'
        >
          Se connecter
        </Link>
        <Link
          href={'/signup'}
          className='bg-primary text-primary_dark rounded-xl p-3 text-center'
        >
          S&apos;inscrire
        </Link>
      </div>
    </div>
  )
}
