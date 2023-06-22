import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Question2 = ({ setData }: any) => {
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
          src={'/question2.svg'}
          alt={'picto'}
        />
      </motion.div>
      <p className='text-3xl text-primary_dark text-center'>Prenons 5 minutes pour discuter de tes règles et de ton cycle</p>
      <button
        className='bg-primary_dark text-primary  p-3 rounded-md w-full'
        onClick={() =>
          setData((prev: any) => ({
            ...prev,
            question2: true,
          }))
        }
      >
        Suivant
      </button>
    </div>
  )
}

export default Question2
