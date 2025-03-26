import React from 'react'
import DeliveryCard from '../components/DeliveryCard'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';



function DeliveryDashboard() {
  const location = useLocation();
  
  const PhoneNO = location.state

  const Navigate = useNavigate()

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/VerifyDelivery`,{ withCredentials: true })
    .then((res)=>{
        console.log(res.data.message);
        
        if(res.data.message === 'authorized User'){
            
        }else if(res.data.message === 'No Token Found'){
            Navigate('/DeliveryLogin')
        }
    })
    .catch((error)=>{

    })
  },[])
  

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