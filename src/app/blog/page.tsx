import React from 'react'
import Image from 'next/image'

const Article1 = () => {
  return (
    <article className='bg-yellow rounded-lg p-4'>
      <h4 className='text-xl font-semibold text-primary_dark'>Médecine</h4>
      <p className='text-primary_dark font-medium'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </article>
  )
}

const Article2 = () => {
  return (
    <article>
      <h4>Médecine</h4>
      <p>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </article>
  )
}

const Article3 = () => {
  return (
    <article>
      <h4>Médecine</h4>
      <p>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </article>
  )
}

const Article4 = () => {
  return (
    <article>
      <h4>Médecine</h4>
      <p>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </article>
  )
}

const Blog = () => {
  return (
    <>
      <h3 className='text-3xl text-primary_dark mb-4 mt-4'>Blog</h3>
      <div className='flex gap-2 items-center rounded-full px-4 bg-[#F2E5F9] bg-opacity-40 rounded-fullw-full'>
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
      <Article1 />
      <Article2 />
    </>
  )
}

export default Blog
