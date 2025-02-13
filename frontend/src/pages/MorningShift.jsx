import React from 'react'
import Orders from '../components/Orders'

function MorningShift() {
  return (
    <div className='w-[100%] h-screen bg-[#00FFAA] font-roboto'>
        <h1 className='text-2xl text-center pt-8 font-semibold'>Morning Orders</h1>
        <div className='flex justify-center items-center pt-4 flex-col gap-4'>
            <Orders/>
            <Orders/>
            <Orders/>
            <Orders/>
        </div>
        
    </div>
  )
}

export default MorningShift