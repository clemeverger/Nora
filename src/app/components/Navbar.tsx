'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentRoute = usePathname()
  return (
    <div className='w-full h-[88px] border-t bg-white'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
        <Link
          href={'/home'}
          className='inline-flex flex-col items-center justify-center'
        >
          <span className={currentRoute == '/home' ? ' bg-primary p-1 rounded-lg' : ''}>
            <Image
              src={'/home.svg'}
              alt={''}
              width={24}
              height={24}
            ></Image>
          </span>

          <span className='text-sm text-primary_dark mt-1.5'>Home</span>
        </Link>
        <Link
          href={''}
          className='inline-flex flex-col items-center justify-center'
        >
          <span className={currentRoute == '' ? ' bg-primary p-1 rounded-lg' : ''}>
            <Image
              src={'/calendar.svg'}
              alt={''}
              width={24}
              height={24}
            ></Image>
          </span>
          <span className='text-sm text-primary_dark mt-1.5'>Mon suivi</span>
        </Link>
        <Link
          href={'/directory/all'}
          className='inline-flex flex-col items-center justify-center'
        >
          <span className={currentRoute == '/directory/all' ? ' bg-primary p-1 rounded-lg' : ''}>
            <Image
              src={'/directory.svg'}
              alt={''}
              width={24}
              height={24}
            ></Image>
          </span>
          <span className='text-sm text-primary_dark mt-1.5'>Annuaire</span>
        </Link>
        <Link
          href={'/blog'}
          className='inline-flex flex-col items-center justify-center'
        >
          <span className={currentRoute == '/blog' ? ' bg-primary p-1 rounded-lg' : ''}>
            <Image
              src={'/diag.svg'}
              alt={''}
              width={24}
              height={24}
            ></Image>
          </span>
          <span className='text-sm text-primary_dark mt-1.5'>Blog</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
