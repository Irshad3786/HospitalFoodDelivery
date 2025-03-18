
import React, { useEffect, useState } from 'react'
import Orders from '../components/Orders'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner'

function NightShift() {
  const [OrdersData , setOrdersData] = useState([])
  const location = useLocation();
    
  const PhoneNo = location.state

  const [Spinner , setSpinner] = useState(true)
  const Navigate = useNavigate()

  
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/VerifyPantry`,{ withCredentials: true })
    .then((res)=>{
        console.log(res.data.message);
        
        if(res.data.message === 'authorized User'){
            
        }else if(res.data.message === 'No Token Found'){
            Navigate('/PantryLogin')
        }
        
    })
    .catch((error)=>{

    })
  },[])

  

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
            if(Orders){
              setSpinner(false)
            }
            setOrdersData(Orders);
          });
      
          const handlePopState = () => {
            window.location.reload();
          };
          
          window.addEventListener('popstate', handlePopState);
      
          return () => {
            socket.off('GetAllOrders');
            socket.disconnect();
            window.removeEventListener('popstate', handlePopState);
          };
  
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
        {Spinner && (<div> 
                        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 z-50">
                        <DNA visible={true} height="180" width="180" ariaLabel="dna-loading" />
                        <h1 className='font-Varela text-xl text-white'>Loading... Please Wait</h1>
                        </div>
                      </div>
                    )}
    </div>
  )
}

export default NightShift