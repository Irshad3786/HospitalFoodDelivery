import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Management() {
    const Navigate = useNavigate()


    const [Name , setName] = useState('')
    const [Email , setEmail] = useState('')
    const [PhoneNo , setPhoneNo] = useState('')
    const [EmpId , setEmpId] = useState('')
    const [Password , setPassword] = useState('')
    const [ConfPassword , setConfPassword] = useState('')
    const [Loader , setLoader] = useState(false)

    const ManagerDataSubmit = (e)=>{
        e.preventDefault();
        if(!Name || !Email || !PhoneNo || !EmpId || !Password || !ConfPassword){
            toast.info('Fill in all fields.')
        }else if(Password != ConfPassword){
            toast.info("Confirm password doesn't match")
        }else{
            setLoader(true)
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/CreateManagerAccount`,{Name,Email,PhoneNo,EmpId,Password})
            .then((res)=>{
                if(res){
                    Navigate('/Success')
                }
                
            })
            .catch((error)=>{
                if(error.response.data.message === 'Email or Phone already exists'){
                    toast.warn('Email Or PhoneNo already Exists.')
                    setLoader(false)
                }
            })
        }
        
    }


  return (
    <div className='w-full min-h-screen bg-[#00FFAA]'>
        <ToastContainer/>

        {!Loader && (<div className='flex justify-center items-center p-8 pt-32 '>
            <h1 className=' font-bold font-Varela  text-3xl '>Create Your Food Manager Account </h1>
        </div>)}
        {!Loader && (<div>
            <Form onSubmit={ManagerDataSubmit}>
                <div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className=' border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="email" placeholder='Email' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <input type="text" placeholder='Phone number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={PhoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
                    <input type="text" placeholder='Employe ID' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={EmpId} onChange={(e)=>{setEmpId(e.target.value)}}/>
                    <input type="password" placeholder='Password' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <input type="password"  placeholder='Confirm Password' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={ConfPassword} onChange={(e)=>{setConfPassword(e.target.value)}}/>
                </div>
                <div className='flex justify-center items-center p-4'>
                    <button className='bg-white px-4 py-2 rounded-xl hover:bg-slate-400 font-Varela flex gap-2 justify-center items-center border border-black'>Submit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z"/></svg></button>
                </div>
            </Form>
        </div>)}

        {Loader &&(<div className='flex flex-col justify-center items-center w-[100%] h-screen gap-8 text-[2vw] font-roboto'>
            <RotatingLines
                visible={Loader}
                height="105"
                width="105"
                color="black"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

            {Loader &&(<h1>Creating your account, please wait...</h1>)}
        </div>)}

            
    </div>
  )
}

export default Management