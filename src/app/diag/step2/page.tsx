import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Step2 = () => {
  async function save(data: any) {
    'use server'
    redirect('/diag/step3')
  }

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <div className='w-full flex flex-row-reverse mt-8 mb-4'>
        <Image
          src={'/close.svg'}
          alt='close'
          width={20}
          height={20}
        />
      </div>

      <div className='bg-fuchsia-300 px-4 py-2 mb-4'>Question 1/8</div>
      <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur. Risus aliquet et sapien nec malesuada at pretium duis ut ?</p>
      <form
        action={save}
        className='grow-[1] flex flex-col justify-evenly'
      >
        <div className='flex flex-wrap justify-between gap-y-4'>
          <label className='flex flex-col-reverse items-center justify-center'>
            cdsecsd
            <Image
              src={'/fake.png'}
              alt={'picto'}
              height={100}
              width={100}
            />
            <input
              type='radio'
              name='step2'
              value='1'
              className='hidden'
            />
          </label>
          <label className='flex flex-col-reverse items-center justify-center'>
            cdsecsd
            <Image
              src={'/fake.png'}
              alt={'picto'}
              height={100}
              width={100}
            />
            <input
              type='radio'
              name='step2'
              value='1'
              className='hidden'
            />
          </label>
          <label className='flex flex-col-reverse items-center justify-center'>
            cdsecsd
            <Image
              src={'/fake.png'}
              alt={'picto'}
              height={100}
              width={100}
            />
            <input
              type='radio'
              name='step2'
              value='1'
              className='hidden'
            />
          </label>
          <label className='flex flex-col-reverse items-center justify-center'>
            cdsecsd
            <Image
              src={'/fake.png'}
              alt={'picto'}
              height={100}
              width={100}
            />
            <input
              type='radio'
              name='step2'
              value='1'
              className='hidden'
            />
          </label>
          <label className='flex flex-col-reverse items-center justify-center'>
            cdsecsd
            <Image
              src={'/fake.png'}
              alt={'picto'}
              height={100}
              width={100}
            />
            <input
              type='radio'
              name='step2'
              value='1'
              className='hidden'
            />
          </label>
          <label className='flex flex-col-reverse items-center justify-center'>
            cdsecsd
            <Image
              src={'/fake.png'}
              alt={'picto'}
              height={100}
              width={100}
            />
            <input
              type='radio'
              name='step2'
              value='1'
              className='hidden'
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

export default Step2
