import React from 'react'
import DeliveryCard from '../components/DeliveryCard'
import { useLocation } from "react-router-dom";

function DeliveryDashboard() {
  const location = useLocation();
  
  const PhoneNO = location.state

  

  return (
    <div className='w-[100%] h-screen bg-[#00FFAA]'>
      <div>
        <h1 className='text-center font-outfit text-2xl p-4 font-semibold md:text-4xl'>Delivery List</h1>
        <div className='flex justify-center items-center flex-col gap-14 p-2'>
          <DeliveryCard Phonenumber = {PhoneNO} />
        </div>
      </div>
    </div>
  )
}


export default DeliveryDashboard