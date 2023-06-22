import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ARTICLES = [
  {
    title: 'Alimentation et Endométriose: Conseils pour soulager les symptômes',
    image: '/article1.svg',
  },
  {
    title: "Impact émotionnel de l'endométriose : soutien psychologique et bien-être",
    image: '/article2.svg',
  },
  {
    title: 'Les avancées récentes dans la recherche sur les troubles',
    image: '/article3.svg',
  },
  {
    title: 'Nouveautés dans la recherche sur le SOPK : avancées et découvertes récentes',
    image: '/article4.svg',
  },
  {
    title: "Impact émotionnel de l'endométriose : soutien psychologique et bien-être",
    image: '/article5.svg',
  },
  {
    title: 'Les avancées récentes dans la recherche sur les troubles',
    image: '/article6.svg',
  },
  {
    title: 'Nouveautés dans la recherche sur le SOPK : avancées et découvertes récentes',
    image: '/article7.svg',
  },
  {
    title: "Impact émotionnel de l'endométriose : soutien psychologique et bien-être",
    image: '/article8.svg',
  },
]

const Articles = () => {
  return (
    <section className='flex flex-col gap-4 mb-4'>
      <h4 className='text-xl text-primary_dark'>Articles</h4>
      {ARTICLES.map((article, index) => (
        <div
          key={index}
          className='flex items-center gap-4'
        >
          <Image
            className='shrink-0'
            src={article.image}
            alt={article.title}
            width={120}
            height={120}
          />
          <p className='text-sm'>{article.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Articles
