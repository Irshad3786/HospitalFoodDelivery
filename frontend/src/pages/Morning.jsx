import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { io } from 'socket.io-client';
import axios from 'axios';

function Morning() {

  const[Orders , setOrders] = useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/FullOrdersData`)
    .then(()=>{

    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  useEffect(()=>{

    const socket = io(import.meta.env.VITE_BACKEND_URL);

    socket.on('OrderCreated', (Orders) => {
      setOrders(Orders)
    })

    return () => {
      socket.off('OrderCreated');
    }

  },[])


  

  const MorningOrders = Orders.filter((data)=>data.Shift === 'Morning')


  



  return (
    <div className='w-[100%] h-[100%] bg-[#00FFAA]'>
      <div>
        <h1 className='text-center font-outfit text-2xl p-4 font-semibold md:text-4xl'>Morning  List</h1>
        <div className='flex justify-center items-center flex-col gap-14 p-2'>
          {
            MorningOrders.reverse().map((data)=>(
              <Card OrderData = {data}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Morning