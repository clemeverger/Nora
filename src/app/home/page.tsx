import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <div className='flex justify-between top-xl pt-4 pb-4'>
        <h1 className='text-3xl text-primary_dark'>Bonjour, Nora</h1>
        <Link
          href={'/account'}
          className='relative bg-primary_light h-auto rounded-full p-2'
        >
          <Image
            src={'/param.svg'}
            alt={'icon'}
            width={28}
            height={28}
          />
        </Link>
      </div>

      <Link
        href={'directory/all'}
        className='relative bg-primary_dark rounded-xl p-4 block mb-8'
      >
        <h4 className='text-xl font-medium text-white mb-2'>Trouve un spécialiste</h4>
        <Image
          className='absolute top-2 right-2'
          src={'/idea.svg'}
          alt={'icon'}
          width={40}
          height={40}
        />
        <p className='text-white font-light'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
      </Link>
      <div>
        <div className='flex justify-between text-primary_dark mb-4'>
          <h2 className='text-xl'>Contenu pédagogique</h2>
          <Link
            href={''}
            className='underline text-sm font-medium'
          >
            Tout voir
          </Link>
        </div>
        <div className='flex overflow-x-scroll no-scrollbar pb-6 space-x-8 relative inset-x-1/2 pl-4 ml-[-50vw] mr-[-50vw] w-[100vw] '>
          <Link
            href={''}
            className='flex flex-col items-start max-w-[150px] text-primary_dark shrink-0'
          >
            <div className='bg-yellow rounded-xl px-8 pt-10 pb-5 relative'>
              <p className='bg-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded absolute top-2 left-2'>Témoignage</p>
              <Image
                className='mr-O'
                src={'/idea.svg'}
                alt={'icon'}
                width={90}
                height={90}
              ></Image>
            </div>
            <p className='mt-4 text-center text-base font-light'>Titre de l’article sur une ou deux lignes</p>
          </Link>

          <Link
            href={''}
            className='flex flex-col items-start max-w-[150px] text-primary_dark shrink-0'
          >
            <div className='bg-primary_light rounded-xl px-8 pt-10 pb-5 relative'>
              <p className='bg-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded absolute top-2 left-2'>Témoignage</p>
              <Image
                className='mr-O'
                src={'/mug.svg'}
                alt={'icon'}
                width={90}
                height={90}
              ></Image>
            </div>
            <p className='mt-4 text-center text-base font-light'>Titre de l’article sur une ou deux lignes</p>
          </Link>

          <Link
            href={''}
            className='flex flex-col items-start max-w-[150px] text-primary_dark shrink-0'
          >
            <div className='bg-primary rounded-xl px-8 pt-10 pb-5 relative'>
              <p className='bg-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded absolute top-2 left-2'>Témoignage</p>
              <Image
                className='mr-O'
                src={'/star.svg'}
                alt={'icon'}
                width={90}
                height={90}
              ></Image>
            </div>
            <p className='mt-4 text-center text-base font-light'>Titre de l’article sur une ou deux lignes</p>
          </Link>

          <Link
            href={''}
            className='flex flex-col items-start max-w-[150px] text-primary_dark shrink-0'
          >
            <div className='bg-primary_dark rounded-xl px-8 pt-10 pb-5 relative'>
              <p className='bg-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded absolute top-2 left-2'>Témoignage</p>
              <Image
                className='mr-O'
                src={'/sun.svg'}
                alt={'icon'}
                width={90}
                height={90}
              ></Image>
            </div>
            <p className='mt-4 text-center text-base font-light'>Titre de l’article sur une ou deux lignes</p>
          </Link>
          <div className='w-1'></div>
        </div>
      </div>
      <Link
        href={''}
        className='relative bg-yellow rounded-xl p-4 block mb-8'
      >
        <h4 className='text-xl font-medium text-primary_dark mb-2'>Quiz du moi</h4>
        <Image
          className='absolute top-2 right-2'
          src={'/phone.svg'}
          alt={'icon'}
          width={40}
          height={40}
        />
        <p className='text-primary_dark font-light'>Découvre notre liste de spécialistes spécialement adaptés pour ton besoin</p>
      </Link>
    </div>
  )
}

export default Home
