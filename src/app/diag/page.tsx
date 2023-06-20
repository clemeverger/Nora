import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  async function save(data: any) {
    'use server'
    redirect('/diag/step2')
  }
  return (
    <div className='min-h-screen flex flex-col '>
      <h2 className='text-3xl text-center mt-10 mb-10'>As-tu déjà été diagnostiquée ?</h2>
      <form
        action={save}
        className='grow-[1] flex flex-col justify-evenly'
      >
        <div className='flex flex-col gap-4'>
          <label className='flex flex-row-reverse justify-end content-center gap-2 border border-gray-300 px-2 py-4 rounded-md'>
            Oui
            <input
              type='radio'
              name='isDiag'
              value='yes'
              required
            />
          </label>
          <label className='flex flex-row-reverse justify-end content-center gap-2 border border-gray-300 px-2 py-4 rounded-md'>
            Non
            <input
              type='radio'
              name='isDiag'
              value='no'
              required
            />
          </label>
          <label className='flex flex-row-reverse justify-end content-center gap-2 border border-gray-300 px-2 py-4 rounded-md'>
            Je en souhaite pas répondre
            <input
              type='radio'
              name='isDiag'
              value='noAnswer'
              required
            />
          </label>
        </div>
        <input
          type='submit'
          value='Suivant'
          className='bg-fuchsia-500 text-white p-3 rounded-md'
        />
      </form>
    </div>
  )
}

export default page
