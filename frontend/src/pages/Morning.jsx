import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { io } from 'socket.io-client';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner'

function Morning() {
  const Navigate = useNavigate()
  const[Orders , setOrders] = useState([])
  const [Spinner , setSpinner] = useState(true)


  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/VerifyManager`,{ withCredentials: true })
    .then((res)=>{
        console.log(res.data.message);
        
        if(res.data.message === 'authorized User'){
            
        }else if(res.data.message === 'No Token Found'){
            Navigate('/ManagerLogin')
        }
        
    })
    .catch((error)=>{

    })
},[])


  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/FullOrdersData`)
    .then((res)=>{
      setOrders(res.data.data)
      if(res){
        setSpinner(false)
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  useEffect(()=>{

    const socket = io(import.meta.env.VITE_BACKEND_URL);

    socket.on('OrderCreated', (Orders) => {
      if(Orders){
        setSpinner(false)
        setOrders(Orders)
      }
      
    })

    return () => {
      socket.off('OrderCreated');
    }

  },[])


  

  const MorningOrders = Orders.filter((data)=>data.Shift === 'Morning')


  



  return (
    <div className='w-[100%] h-[100%] bg-[#00FFAA]'>
      <div className='py-3 px-3'>
      <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400' onClick={()=>{
                  Navigate('/TrackMeals')
                }}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
        <h1 className='text-center font-Varela text-2xl p-4 font-bold md:text-4xl'>Morning  List</h1>
        <div className='flex justify-center items-center flex-col gap-14 p-2'>
          {
            MorningOrders.reverse().map((data)=>(
              <Card OrderData = {data}/>
            ))
          }
        </div>
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

export default Morning