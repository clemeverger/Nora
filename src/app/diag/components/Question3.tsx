'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent } from 'react'

const Question3 = ({ setData }: any) => {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const question3 = form.get('question3')
    setData((prev: any) => ({
      ...prev,
      question3: question3,
    }))
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <div className='w-full flex flex-row-reverse mt-4 mb-4'>
        <Link href={'/home'}>
          <Image
            src={'/close.svg'}
            alt='close'
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className='bg-primary px-4 py-2 mb-4 rounded-md'>Question 1/8</div>

      <form
        onSubmit={handleSubmit}
        className='grow-[1] flex flex-col justify-around'
      >
        <p className='text-lg text-center font-bold'>Parlons peu, parlons flux. Peux-tu me dire à quel flux tu t&apos;identifierais ce mois-ci ?</p>
        <div className='flex flex-wrap gap-2 text-sm text-center'>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-col-reverse items-center justify-center max-w-[100px] '
          >
            Pas de saignements
            <input
              type='radio'
              name='question3'
              value='1'
              className='hidden peer'
              required
            />
            <div className='peer-checked:border-2 peer-checked:border-primary_dark peer-checked:rounded-md'>
              <Image
                src={'/s-none.svg'}
                alt={'picto'}
                height={100}
                width={100}
              />
            </div>
          </motion.label>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-col-reverse items-center justify-center max-w-[100px]'
          >
            Saignements légers
            <input
              type='radio'
              name='question3'
              value='1'
              className='hidden peer'
              required
            />
            <div className='peer-checked:border-2 peer-checked:border-primary_dark peer-checked:rounded-md'>
              <Image
                src={'/s-sm.svg'}
                alt={'picto'}
                height={100}
                width={100}
              />
            </div>
          </motion.label>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-col-reverse items-center justify-center max-w-[100px]'
          >
            Saignements moyens
            <input
              type='radio'
              name='question3'
              value='1'
              className='hidden peer'
              required
            />
            <div className='peer-checked:border-2 peer-checked:border-primary_dark peer-checked:rounded-md'>
              <Image
                src={'/s-md.svg'}
                alt={'picto'}
                height={100}
                width={100}
              />
            </div>
          </motion.label>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-col-reverse items-center justify-center max-w-[100px]'
          >
            Saignements abondants
            <input
              type='radio'
              name='question3'
              value='1'
              className='hidden peer'
              required
            />
            <div className='peer-checked:border-2 peer-checked:border-primary_dark peer-checked:rounded-md'>
              <Image
                src={'/s-lg.svg'}
                alt={'picto'}
                height={100}
                width={100}
              />
            </div>
          </motion.label>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-col-reverse items-center justify-center max-w-[100px]'
          >
            Saignements très abondants
            <input
              type='radio'
              name='question3'
              value='1'
              className='hidden peer'
              required
            />
            <div className='peer-checked:border-2 peer-checked:border-primary_dark peer-checked:rounded-md'>
              <Image
                src={'/s-xl.svg'}
                alt={'picto'}
                height={100}
                width={100}
              />
            </div>
          </motion.label>
        </div>
        <input
          type='submit'
          value='Suivant'
          className='p-3 rounded-md bg-primary_dark text-primary w-full'
        />
      </form>
    </div>
  )
}

export default Question3
