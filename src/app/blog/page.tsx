import React from 'react'
import Image from 'next/image'
import Card from './components/Card'

const CARDS = [
  {
    title: 'Médecine',
    description: 'Découvre notre liste de spécialistes spécialement adaptés pour ton besoin',
    backgroundColor: 'bg-yellow',
    icon: '/card1.svg',
  },
  {
    title: 'Recherche',
    description: 'Découvre notre liste de spécialistes spécialement adaptés pour ton besoin',
    backgroundColor: 'bg-orange',
    icon: '/card2.svg',
  },
  {
    title: 'Témoignages',
    description: 'Découvre notre liste de spécialistes spécialement adaptés pour ton besoin',
    backgroundColor: 'bg-primary_light',
    icon: '/card3.svg',
  },
  {
    title: 'Conseils',
    description: 'Découvre notre liste de spécialistes spécialement adaptés pour ton besoin',
    backgroundColor: 'bg-primary',
    icon: '/card4.svg',
  },
]

const Blog = () => {
  return (
    <div className='mb-4'>
      <h3 className='text-3xl text-primary_dark mb-4 mt-4'>Blog</h3>
      <div className='flex gap-2 items-center rounded-full px-4 bg-[#F2E5F9] bg-opacity-40 mb-4'>
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
      <div className='flex flex-col gap-4'>
        {CARDS.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            backgroundColor={card.backgroundColor}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog
