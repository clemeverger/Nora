'use client'
import React, { useState } from 'react'
import EndDiag from './EndDiag'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Question5 from './Question5'
import Question6 from './Question6'
import Question7 from './Question7'

const Diag = () => {
  const [data, setData] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
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
  if (data.question1 && data.question2 && data.question3 && data.question4 === null) {
    return <Question4 setData={setData} />
  }
  if (data.question1 && data.question2 && data.question3 && data.question4 && data.question5 === null) {
    return <Question5 setData={setData} />
  }
  if (data.question1 && data.question2 && data.question3 && data.question4 && data.question5 && data.question6 === null) {
    return <Question6 setData={setData} />
  }
  if (data.question1 && data.question2 && data.question3 && data.question4 && data.question5 && data.question6 && data.question7 === null) {
    return <Question7 setData={setData} />
  }

  return <EndDiag />
}

export default Diag
