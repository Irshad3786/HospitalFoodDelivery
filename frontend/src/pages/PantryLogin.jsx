import React from 'react'
import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



function PantryLogin() {
    const [PhoneNo , setPhoneNo] = useState('')
    const [Password , setPassword] = useState('')

    const Navigate = useNavigate()
    

 const Submit =(e)=>{
  e.preventDefault();
  
    if(!PhoneNo || !Password){
      toast.warn("Fill in all fields.")
    }else{
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/PantryLogin`,{PhoneNo,Password},{ withCredentials: true })
      .then((res)=>{
        if(res.data.message === "User Authenticated"){
          Navigate('/PantryDashboard', {state:PhoneNo})
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
  return (
    <div>
        <div className='bg-[#00FFAA] w-[100%] h-screen'>
      <ToastContainer/>
        <h1 className='text-center pt-16 text-xl font-mono sm:text-2xl md:text-3xl'>Pantry Dashboard Login</h1>
        <Form onSubmit={Submit} >
            <div className='flex flex-col justify-center items-center gap-7 pt-44'>
                
              <input type="number" className='p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter PhoneNo' value={PhoneNo}
               onChange={(e)=>{setPhoneNo(e.target.value)}}/>

              <input type="password" className='p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter Password ' 
                value={Password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
              
              <button className='p-2 bg-white rounded-lg shadow-xl px-3 font-roboto hover:bg-slate-500'>Login</button>
            </div>
        </Form>
        
      </div>
    </div>
  )
}

export default PantryLogin