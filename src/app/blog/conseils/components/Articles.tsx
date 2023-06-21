import React from 'react'

const options = [
  { value: 'all', label: 'Tous' },
  { value: 'Gynécologue obstétricien', label: 'Gynécologue' },
  { value: 'Médecin généraliste', label: 'Médecin généraliste' },
  { value: 'Sage-femme', label: 'Sage-femme' },
]

const Articles = () => {
  return (
    <section className='text-xl text-primary_dark'>
      Articles
      <div>
        {options.map((option) => (
          <button
            className={'p-1 rounded text-secondary bg-primary text-opacity-100'}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Articles
