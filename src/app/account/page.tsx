'use client'
import { signOut, useSession } from 'next-auth/react'

const Account = () => {
  const { data: session } = useSession()
  return (
    <>
      {session && (
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl mt-10 text-primary_dark'>Mon compte</h2>
          <div>{session?.user?.email}</div>
          <button
            className='bg-primary_dark text-primary rounded-xl p-3 text-center w-full'
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Déconnexion
          </button>
        </div>
      )}
    </>
  )
}

export default Account
