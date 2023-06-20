'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Article1 = () => {
  return (
    <Link
      href={'blog/article1'}
      className='bg-yellow rounded-xl p-4'
    >
      <h4 className='text-xl font-semibold text-primary_dark mb-2'>Médecine</h4>
      <p className='text-primary_dark font-medium'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </Link>
  )
}
const Article2 = () => {
  return (
    <Link
      href={'blog/article2'}
      className='bg-orange rounded-xl p-4'
    >
      <h4 className='text-xl font-semibold text-primary_dark mb-2'>Recherche</h4>
      <p className='text-primary_dark font-medium'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </Link>
  )
}
const Article3 = () => {
  return (
    <Link
      href={'blog/article3'}
      className='bg-primary_light rounded-xl p-4'
    >
      <h4 className='text-xl font-semibold text-primary_dark mb-2'>Témoignages</h4>
      <p className='text-primary_dark font-medium'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </Link>
  )
}
const Article4 = () => {
  return (
    <Link
      href={'blog/article4'}
      className='bg-primary rounded-xl p-4'
    >
      <h4 className='text-xl font-semibold text-primary_dark mb-2'>Conseils</h4>
      <p className='text-primary_dark font-medium'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
    </Link>
  )
}

const ARTICLES = [
  {
    title: 'Médecine',
    component: Article1,
  },
  {
    title: 'Recherche',
    component: Article2,
  },
  {
    title: 'Témoignages',
    component: Article3,
  },
  {
    title: 'Conseils',
    component: Article4,
  },
]

const Blog = () => {
  const [articles, setArticles] = useState(ARTICLES)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const filteredArticles = ARTICLES.filter((article) => article.title.toLowerCase().includes(value.toLowerCase()))
    setArticles(filteredArticles)
  }

  return (
    <>
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
          onChange={handleOnChange}
        />
      </div>
      <div className='flex flex-col gap-4'>
        {articles.map((Article, index) => (
          <Article.component key={index} />
        ))}
      </div>
    </>
  )
}

export default Blog
