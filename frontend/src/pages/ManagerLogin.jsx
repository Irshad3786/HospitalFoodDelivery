import axios from 'axios';
import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function ManagerLogin() {
  const [Email , setEmail] = useState('')
  const [Password , setPassword] = useState('')

  const Navigate = useNavigate()

  const Submit =(e)=>{
    e.preventDefault();
    if(!Email || !Password){
      toast.warn("Fill in all fields.")
    }else{
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/ManagerLogin`,{Email,Password},{ withCredentials: true })
      .then((res)=>{
        if(res.data.message === "User Authenticated"){
          Navigate('/ManagerDashboard')
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
        <h1 className='text-center pt-10 text-xl font-mono sm:text-2xl md:text-3xl'>Manager Dashboard Login</h1>
        <Form onSubmit={Submit} >
            <div className='flex flex-col justify-center items-center gap-7 pt-28'>
              <input type="email" className='p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter Email' value={Email}
               onChange={(e)=>{setEmail(e.target.value)}}/>

              <input type="password" className='p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter Password ' 
                value={Password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
              
              <button className='p-2 bg-white rounded-lg shadow-xl px-3 font-roboto hover:bg-slate-500'>Login</button>
            </div>
        </Form>
        <h6 className='text-center pt-7 font-roboto'>Don't have an account ?<Link to='/CreateAccount' className='text-sky-950 font-mono  p-2 rounded-lg font-semibold underline'>CreateAccount </Link></h6>
      </div>
    </div>
  )
}

export default ManagerLogin