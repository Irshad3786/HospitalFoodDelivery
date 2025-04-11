import React, { useEffect, useState } from 'react'
import Orders from '../components/Orders'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner'


function MorningShift() {
  const [OrdersData , setOrdersData] = useState([])
  const location = useLocation();
  const [Spinner , setSpinner] = useState(true)
  const [PhoneNo, setPhoneNo] = useState('');
  const Navigate = useNavigate()

  useEffect(() => {
    const phone = location?.state || sessionStorage.getItem("phoneNo");
    if (phone) {
      setPhoneNo(phone);
      sessionStorage.setItem("phoneNo", phone);
    } else {
      Navigate('/PantryLogin'); 
    }
  }, [location?.state]);

  console.log("Location state:", location.state);
  console.log("Session Phone:", sessionStorage.getItem("phoneNo"));

  console.log("org",PhoneNo);
  
 
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/VerifyPantry`,{ withCredentials: true })
    .then((res)=>{
   
        if(res.data.message === 'authorized User'){
            
        }else if(res.data.message === 'No Token Found'){
            Navigate('/PantryLogin')
        }
        
    })
    .catch((error)=>{
      console.log(error);
      
    })
  },[])

  
  

  useEffect(()=>{
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/getOrders`,{PhoneNo})
    .then((res)=>{
      setOrdersData(res.data.data)
      if(res.data.data){
        setSpinner(false)
      }
    })
    .catch((error)=>{
      console.log(error);
      
    })
  },[PhoneNo])


  useEffect(()=>{

    const socket = io(import.meta.env.VITE_BACKEND_URL);

    socket.on('GetAllOrders', (Orders) => {
      if(Orders){
        setSpinner(false)
      }
      
      setOrdersData(Orders);
    });

    

    return () => {
      socket.off('GetAllOrders');
      socket.disconnect();
      
    };

  },[])



  
  
  const morningOrder= OrdersData.filter((data)=> data.Shift === 'Morning')
  
  return (
    <div className='w-[100%] min-h-screen h-max-screen bg-[#00FFAA] font-roboto'>
      <div className='pt-3 pl-3'>
      <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400' onClick={()=>{
                    Navigate('/PantryDashboard')
                }}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
        </div>
        <h1 className='text-2xl text-center pt-8 font-semibold sm:text-3xl'>Morning Orders</h1>
        
        <div className='flex justify-center items-center pt-4 flex-col gap-8 '>

        {morningOrder.length == 0 && (<div className='flex justify-center items-center h-fit w-[100%] absolute top-72'>
            <h1 className='font-outfit text-4xl'>NO ORDERS FOUND</h1>
          </div>)}

          {
            OrdersData.filter((data)=> data.Shift === 'Morning').map((ordersdata)=>(
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

export default MorningShift