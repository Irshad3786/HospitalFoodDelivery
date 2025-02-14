import React, { useEffect } from 'react'
import Orders from '../components/Orders'
import { useLocation } from "react-router-dom";

function MorningShift() {
  const location = useLocation();
    
  const PhoneNO = location.state

  
  return (
    <div className='w-[100%] min-h-screen h-max-screen bg-[#00FFAA] font-roboto'>
        <h1 className='text-2xl text-center pt-8 font-semibold sm:text-3xl'>Morning Orders</h1>
        <div className='flex justify-center items-center pt-4 flex-col gap-8 '>
            <Orders/>
            <Orders/>
            <Orders/>
            <Orders/>
        </div>
        
    </div>
  )
}

export default MorningShift