import React from 'react'

const Blog = () => {
  return (
    <div>
      <h3 className='text-3xl'>Blog</h3>
      <input
        type={'text'}
        className='bg-primary_dark rounded-full px-4 py-1'
        placeholder={'Rechercher un article'}
      />
    </div>
  )
}

export default Blog
