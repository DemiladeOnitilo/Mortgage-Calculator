import React from 'react'
import calculator from '../assets/images/icon-calculator.svg'


const CalcButton = () => {
  
  return (
    <div>
        <button type='submit' className='bg-[#d7da2f] rounded-3xl h-15 w-full lg:w-[70%]  flex gap-x-3 justify-center items-center font-bold cursor-pointer hover:bg-[#d7da2f]/30 active:bg-black mt-4 lg:mt-0'><img src={calculator} />Calculate Repayment</button>
    </div>
  )
}

export default CalcButton