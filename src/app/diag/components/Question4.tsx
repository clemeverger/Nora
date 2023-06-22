import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent } from 'react'

const Question4 = ({ setData }: any) => {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const question4 = form.get('question4')
    setData((prev: any) => ({
      ...prev,
      question4: question4,
    }))
  }

  const answer = [
    '0 - 1 : Pas de douleurs',
    '2 - 4 : Légères douleurs',
    '4 - 6 : Moyennes douleurs',
    '6 - 8 : Fortes douleurs',
    '8 - 10 : Douleurs insupportables',
  ]

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
      <div className='bg-primary px-4 py-2 mb-4 rounded-md'>Question 2/8</div>

      <form
        onSubmit={handleSubmit}
        className='grow-[1] flex flex-col justify-around'
      >
        <p className='text-lg text-center font-bold'>Au niveau des douleurs, où te placerais-tu ?</p>
        <div className='flex flex-col gap-4'>
          {answer.map((item, index) => (
            <motion.label
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <div className='flex gap-2 border px-4 py-4 rounded-md w-full'>
                <input
                  type='radio'
                  name='question4'
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

export default Question4
