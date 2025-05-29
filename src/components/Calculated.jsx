import React from 'react'
import Output from './Output'
import Empty from './Empty'


const Calculated = ({calculated, isCalculated}) => {


  return (
    <div className='flex flex-col justify-center items-center gap-y-4 p-4 lg:p-8 slate-900-bg h-[50%] w-full lg:h-full lg:w-[50%] lg:rounded-bl-[100px] lg:rounded-r-3xl'>
      { isCalculated 
        ?
        <Output 
        calculated={calculated}
        /> 
        :
        <Empty />
  }
    </div>
  )
}

export default Calculated