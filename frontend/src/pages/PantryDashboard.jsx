import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function PantryDashboard() {
  const Navigate = useNavigate()
  const location = useLocation();
  
  const PhoneNO = location.state

 
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


  const Morning = ()=>{
    Navigate('/MorningShift',{state:PhoneNO})
    sessionStorage.setItem("phoneNo", PhoneNO);
  }

  const Evening = ()=>{
    Navigate('/EveningShift',{state:PhoneNO})
    sessionStorage.setItem("phoneNo", PhoneNO);
  }

  const Night = ()=>{
    Navigate('/NightShift',{state:PhoneNO})
    sessionStorage.setItem("phoneNo", PhoneNO);
  }

  const CreateDeliveryAccount =()=>{
    Navigate('/CreateDelivery')
  }



  

  return (
    <div className='w-[100%] h-screen bg-[#00FFAA]'>
      <div>
            <div className='p-4 '>
                <div className='flex justify-between gap-1'>
                  <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400' onClick={()=>{
                    Navigate('/PantryLogin')
                  }}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
                  <button className='flex justify-center items-center text-base md:text-lg shadow-lg font-bold bg-white  rounded-xl pr-5 font-Varela hover:bg-slate-400 p-2 gap-2' onClick={CreateDeliveryAccount}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M9 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M15 6h6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M18 3v6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="8;0"/></path></g></svg>Create Delivery   </button>
                </div>
                <h1 className='text-3xl font-Varela text-center p-5 font-bold'>Shifts</h1>
            </div>
          <div className=' flex justify-center items-center'>
            <div className='w-[80%] h-96 bg-emerald-100 flex flex-col justify-center items-center gap-8 p-3 pt-12 pb-12 rounded-xl shadow-2xl'>
              <div className='w-[80%] h-44  rounded-md flex justify-center items-center '>
                <div className='w-[90%] md:w-[50%] h-[90%] bg-black rounded-lg flex justify-center items-center relative shadow-lg hover:bg-slate-600 cursor-pointer' onClick={Morning}>
                  <h1 className=' text-white text-xl flex justify-between items-center gap-4 font-Varela'>Morning <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><path fill="#fff" d="m14 10l-1.58-1.18L13.2 7l-2-.23L11 4.8l-1.82.78L8 4L6.82 5.58L5 4.8l-.23 2L2.8 7l.78 1.82L2 10H0v1h16v-1zM4 10a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 9.993z"/></svg></h1>
                  
                </div>
              </div>
              <div className='w-[80%] h-44  rounded-md flex justify-center items-center'>
                <div className='w-[90%] md:w-[50%] h-[90%] bg-black rounded-lg flex justify-center items-center relative shadow-lg hover:bg-slate-600 cursor-pointer' onClick={Evening}>
                  <h1 className='font-Varela text-white text-xl flex justify-between items-center gap-4'>Evening <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" height="30px" width="30px" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                      <g>
                        <path d="m404.2,254.2h-35.8c-18.7-61.6-71.8-104.8-131.7-104.8-16.1,0-31.9,3-46.9,9-16.7,6.6-32.1,16.8-45.3,29.7-6-38.9 6.3-79.4 34.7-108.3 6-6.1 7.6-15.3 3.9-23.1-3.7-7.7-11.7-12.3-20.3-11.6-19.5,1.8-38.4,7-56.2,15.5-40.4,19.2-70.9,52.9-85.9,95-15,42.1-12.7,87.5 6.5,127.9 7.8,16.4 18.1,31.1 30.3,43.8-3.2,10.7-4.8,21.8-4.8,33.1 0,58.6 43.4,106.3 96.8,106.3h254.7c53.4,0 96.8-47.7 96.8-106.3 5.68434e-14-58.5-43.4-106.2-96.8-106.2zm-345-84.8c10.3-29 30.4-52.7 56.9-67.7-18.9,43.5-18.9,94.2 2.2,138.7 20.9,44.1 60.2,76.3 106.1,89.3-14.7,5.8-30.1,8.7-45.9,8.7-48.6,0-93.5-28.4-114.4-72.3-14.4-30.5-16.2-64.8-4.9-96.7zm345,256.6h-254.7c-30.9,0-56-29.4-56-65.5 0-1.5 0.1-3 0.2-4.6 25.3,14.9 54.5,23.2 84.8,23.2 24.9,0 49-5.5 71.7-16.2 17.8-8.5 33.8-19.8 47.5-33.8 6-6.1 7.6-15.3 3.9-23.1-3.7-7.7-11.8-12.4-20.3-11.6-49,4.5-96.4-20.4-120.9-62.1 0.2-0.2 0.3-0.4 0.5-0.6 11.6-16.4 26.8-28.6 44.1-35.4 10.2-4 20.9-6.1 31.8-6.1 45.5,0 85.8,37.1 95.7,88.2 1.9,9.6 10.3,16.5 20,16.5h51.7c30.9,0 56,29.4 56,65.5 5.68434e-14,36.3-25.1,65.6-56,65.6z"/>
                      </g>
                    </svg></h1>
                  
                </div>
              </div>
              <div className='w-[80%] h-44  rounded-md flex justify-center items-center'>
                <div className='w-[90%] md:w-[50%] h-[90%] bg-black rounded-lg flex justify-center items-center relative shadow-lg hover:bg-slate-600 cursor-pointer ' onClick={Night}>
                  <h1 className='font-Varela text-white text-xl flex justify-between items-center gap-4'>Night<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M-90.24 1.89c-5.56 0-10.09 4.53-10.09 10.09s4.53 10.09 10.09 10.09s10.09-4.53 10.09-10.09s-4.53-10.09-10.09-10.09m5.74 15.51h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m105.69 7.96a.49.49 0 0 0-.57-.09c-1.05.52-2.16.78-3.3.78c-4.14 0-7.5-3.37-7.5-7.5c0-2.38 1.1-4.57 3.03-6.01c.17-.12.19-.34.13-.54s-.29-.35-.49-.36c-.05 0-.11-.01-.16-.01c-5.5 0-9.98 4.48-9.98 9.98s4.48 9.98 9.98 9.98c3.79 0 7.31-2.21 8.97-5.64a.55.55 0 0 0-.11-.59M17.9 5.1l.92-1.76c.02-.04.02-.09-.01-.13s-.08-.06-.12-.05l-1.96.34l-1.39-1.42c-.03-.03-.08-.05-.13-.03c-.05.01-.08.05-.08.1l-.28 1.96l-1.78.88c-.04.02-.07.06-.07.11s.03.09.07.11l1.78.88l.29 1.96c.01.05.04.09.08.1c.01 0 .03.01.04.01c.03 0 .07-.01.09-.04l1.38-1.42l1.96.33c.05.01.09-.01.12-.05s.03-.09.01-.13zm3.2 4.52l.56-1.06c.02-.04.02-.09-.01-.13s-.07-.06-.12-.05l-1.18.2l-.83-.85c-.03-.03-.08-.05-.13-.03c-.05.01-.08.05-.08.1l-.17 1.18l-1.07.53c-.04.02-.07.06-.07.11s.03.09.07.11l1.07.53l.17 1.18c.01.05.04.09.08.1c.01 0 .03.01.04.01c.03 0 .07-.01.09-.04l.83-.86l1.18.2c.05.01.09-.01.12-.05s.03-.09.01-.13zm-4.66 2.77l.56-1.06c.02-.04.02-.09-.01-.13s-.07-.06-.12-.05l-1.18.2l-.83-.85c-.03-.03-.08-.05-.13-.03c-.05.01-.08.05-.08.1l-.17 1.18l-1.07.53c-.04.02-.07.06-.07.11s.03.09.07.11l1.07.53l.17 1.18c.01.05.04.09.08.1c.01 0 .03.01.04.01c.03 0 .07-.01.09-.04l.83-.86l1.18.2c.05.01.09-.01.12-.05s.03-.09.01-.13z"/></svg></h1>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default PantryDashboard