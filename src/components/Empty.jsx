import React from 'react'
import calcError from '../assets/images/illustration-empty.svg'

const Empty = () => {
  return (
     <div className='flex flex-col justify-center items-center gap-y-4 lg:p-5 text-center h-[100%] w-full '>
      <img src={calcError} className='w-[50%] h-[50%]'/>
      <h1 className='text-white text-xl lg:text-2xl'>Results shown here</h1>
      <p className='slate-700 '>Compelete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  )
}

export default Empty