'use client'
import { motion } from 'framer-motion'
import React, { FormEvent } from 'react'

const Question1 = ({ setData }: any) => {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const isDiag = form.get('isDiag')
    setData((prev: any) => ({
      ...prev,
      question1: isDiag,
    }))
  }

  return (
    <div className='h-full flex flex-col '>
      <h2 className='text-3xl text-center mt-10 mb-10 text-primary_dark font-semibold'>Coucou Nora ! Première question As-tu déjà été diagnostiquée ?</h2>
      <form
        onSubmit={handleSubmit}
        className='grow-[1] flex flex-col justify-evenly'
      >
        <div className='flex flex-col gap-4'>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-row-reverse justify-end content-center gap-2 border border-gray-300 px-2 py-4 rounded-md'
          >
            Oui
            <input
              type='radio'
              id='isDiag'
              name='isDiag'
              value='yes'
              required
            />
          </motion.label>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-row-reverse justify-end content-center gap-2 border border-gray-300 px-2 py-4 rounded-md'
          >
            Non
            <input
              type='radio'
              name='isDiag'
              value='no'
              required
            />
          </motion.label>
          <motion.label
            whileHover={{ scale: 1.1 }}
            className='flex flex-row-reverse justify-end content-center gap-2 border border-gray-300 px-2 py-4 rounded-md'
          >
            Je en souhaite pas répondre
            <input
              type='radio'
              name='isDiag'
              value='noAnswer'
              required
            />
          </motion.label>
        </div>
        <input
          type='submit'
          value='Suivant'
          className='bg-primary_dark text-primary p-3 rounded-md'
        />
      </form>
    </div>
  )
}

export default Question1
