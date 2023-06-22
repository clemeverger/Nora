'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent } from 'react'

const Question7 = ({ setData }: any) => {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const question7 = form.get('question7')
    setData((prev: any) => ({
      ...prev,
      question7: question7,
    }))
  }

  const answer = ['Une liste de spécialistes', 'Des informations ', 'Un suivi de mon cycle', 'Je ne sais pas']

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
      <div className='bg-primary px-4 py-2 mb-4 rounded-md'>Question 5/8</div>

      <form
        onSubmit={handleSubmit}
        className='grow-[1] flex flex-col justify-around w-full'
      >
        <p className='text-lg text-center font-bold'>Quel est ton besoin le plus important en ce moment ?</p>
        <div className='flex flex-col gap-4'>
          {answer.map((item, index) => (
            <motion.label
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <div className='flex gap-2 border px-4 py-4 rounded-md'>
                <input
                  type='radio'
                  name='question7'
                  value={index + 1}
                  className='peer'
                  required
                />
                <span>{item}</span>
              </div>
            </motion.label>
          ))}
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

export default Question7
