'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import Articles from './components/Articles'
import Videos from './components/Videos'

const Article = () => {
  const route = useRouter()
  return (
    <div className='mt-4'>
      <span
        className='flex items-center gap-2'
        onClick={() => route.back()}
      >
        <Image
          src={'/arrow-left.svg'}
          alt={'search'}
          width={20}
          height={20}
        />
        Retour
      </span>
      <h3 className='text-3xl text-primary_dark mb-4 mt-4'>Blog</h3>
      <div className='flex gap-2 items-center rounded-full px-4 bg-[#F2E5F9] bg-opacity-40 rounded-fullw-full mb-4'>
        <Image
          src={'/search.svg'}
          alt={'search'}
          width={20}
          height={20}
        />
        <input
          className='bg-transparent w-full py-2  placeholder-primary_dark'
          type={'text'}
          placeholder={'Rechercher un article'}
        />
      </div>
      <Videos />
      <Articles />
    </div>
  )
}

export default Article
