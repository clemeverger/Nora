'use client'
import React, { useState } from 'react'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'

const Diag = () => {
  const [data, setData] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
  })

  if (data.question1 === null) {
    return <Question1 setData={setData} />
  }
  if (data.question1 && data.question2 === null) {
    return <Question2 setData={setData} />
  }
  if (data.question1 && data.question2 && data.question3 === null) {
    return <Question3 setData={setData} />
  }

  return <></>
}

export default Diag
