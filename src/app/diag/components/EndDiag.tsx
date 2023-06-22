import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const EndDiag = () => {
  return (
    <div className='h-full flex flex-col justify-evenly items-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          height={150}
          width={150}
          src={'/end-diag.svg'}
          alt={'picto'}
        />
      </motion.div>
      <p className='text-xl text-primary_dark text-center font-semibold'>
        Ok, pas de stress ! Si tes symptômes persistent, on te conseille de consulter un spécialiste. On te propose une liste de professionnel qui sont
        sensibles et formés au sujet juste ici !
      </p>
      <Link
        href={'/home'}
        className='bg-primary_dark text-primary  p-3 rounded-md w-full text-center'
      >
        Trouver un spécialiste
      </Link>
    </div>
  )
}

export default EndDiag
