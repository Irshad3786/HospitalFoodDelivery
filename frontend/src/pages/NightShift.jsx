
import React, { useEffect, useState } from 'react'
import Orders from '../components/Orders'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { io } from 'socket.io-client';

function NightShift() {
  const [OrdersData , setOrdersData] = useState([])
  const location = useLocation();
    
  const PhoneNo = location.state


  

  useEffect(()=>{
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/getOrders`,{PhoneNo})
    .then((res)=>{
      setOrdersData(res.data.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  },[])


   useEffect(()=>{
  
      const socket = io(import.meta.env.VITE_BACKEND_URL);
  
      socket.on('GetAllOrders', (Orders) => {
        console.log(Orders);
        
        setOrdersData(Orders)
      })
      
      return () => {
        socket.off('OrderCreated');
      }
  
    },[])
  

  

  console.log(OrdersData);

  const nightOrder= OrdersData.filter((data)=> data.Shift === 'Night')
  
  return (
    <div className='w-[100%] min-h-screen h-max-screen bg-[#00FFAA] font-roboto'>
        <h1 className='text-2xl text-center pt-8 font-semibold sm:text-3xl'>Night Orders</h1>
        <div className='flex justify-center items-center pt-4 flex-col gap-8 '>


          {nightOrder.length == 0 && (<div className='flex justify-center items-center h-fit w-[100%] absolute top-72'>
            <h1 className='font-outfit text-4xl'>NO ORDERS FOUND</h1>
          </div>)}

          {
            OrdersData.filter((data)=> data.Shift === 'Night').map((ordersdata)=>(
              <Orders orders = {ordersdata}/>

            ))
          }
            
            
        </div>
        
    </div>
  )
}

export default NightShift