'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Header = () => {
  const { data: session } = useSession()
  return (
    <>
      {session && (
        <div className='flex justify-between'>
          {session?.user?.email}
          <button onClick={() => signOut()}>Déconnexion</button>
        </div>
      )}
    </>
  )
}

export default Header
