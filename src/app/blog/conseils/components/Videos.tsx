import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Videos = () => {
  return (
    <div className='mb-4'>
      <div className='flex justify-between items-center mb-2'>
        <h4 className='text-xl text-primary_dark'>Videos</h4>
        <Link
          href={'/'}
          className='text-primary_dark underline text-sm'
        >
          Toute les vidéos
        </Link>
      </div>
      <div className='flex gap-4 overflow-x-auto'>
        <div className='shrink-0 w-[132px]'>
          <Image
            src={'/video1.png'}
            height={180}
            width={132}
            alt={'video'}
          />
          <p className='text-primary_dark font-semibold mt-1'>Témoignage de Intel, atteinte de l&apos;endométriose</p>
        </div>
        <div className='shrink-0 w-[132px]'>
          <Image
            src={'/video2.png'}
            height={180}
            width={132}
            alt={'video'}
          />
          <p className='text-primary_dark font-semibold mt-1'>Témoignage de Intel, atteinte de l&apos;endométriose</p>
        </div>
        <div className='shrink-0 w-[132px]'>
          <Image
            src={'/video3.png'}
            height={180}
            width={132}
            alt={'video'}
          />
          <p className='text-primary_dark font-semibold mt-1'>Témoignage de Intel, atteinte de l&apos;endométriose</p>
        </div>
      </div>
    </div>
  )
}

export default Videos
