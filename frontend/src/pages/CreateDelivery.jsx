import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { DNA } from 'react-loader-spinner'
import { useEffect } from 'react';

function CreateDelivery() {
      const [Name , setName] = useState('')
      const [ContactInfo , setContactInfo] = useState('')
      const [Location , setLocation] = useState('')
      const [EmergencyNo , setEmergencyNo] = useState('')
      const [Password , setPassword ]= useState('')
      const [ConfirmPassword , setConfirmPassword] = useState('')
      const [Spinner , setSpinner] = useState(false)


      
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


      
      const PantryDataSubmit = (e)=>{
        e.preventDefault();
        
        if(!Name || !ContactInfo || !Location || !EmergencyNo || !Password || !ConfirmPassword ){
            toast.info('Fill in all fields.')
        }else if(Password != ConfirmPassword ){
            toast.info('Confirm Password is Not Correct')
        }else{
            setSpinner(true)
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/CreateDelivery`,{Name,ContactInfo,Location,EmergencyNo,Password})
            .then((res)=>{
                if(res.data.message === 'Delivery Account Created Successfully'){
                    setSpinner(false)
                    toast.success('Delivery Account Created Successfully')
                    setName('')
                    setContactInfo('')
                    setLocation('')
                    setEmergencyNo('')
                    setPassword('')
                    setConfirmPassword('')
                }
            })
            .catch((error)=>{
                if(error.response.data.message == 'EmergencyNo or Phone No already exists'){
                    toast.warn('EmergencyNo or Phone No already exists')
                }
                
            })
        }
          
      }
  return (
    <div className='bg-[#00FFAA] w-[100%] min-h-screen '>
        <div >
            <div className='p-4 '>
                <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400' onClick={()=>{
                    
                }}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
                <h1 className='text-3xl  text-center p-5 font-bold font-Varela'>Create Delivery</h1>
            </div>
            <div>
            <ToastContainer/>
             
            <Form onSubmit={PantryDataSubmit}>
                <div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={Name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="number" placeholder='Contact No' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={ContactInfo} onChange={(e)=>{setContactInfo(e.target.value)}} />
                    <input type="text" placeholder='Working Pantry Name' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={Location} onChange={(e)=>{setLocation(e.target.value)}} />
                    <input type="number" placeholder='Emergency Contact Number' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={EmergencyNo}  onChange={(e)=>{setEmergencyNo(e.target.value)}} />
                    <input type="password" placeholder='Password' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={Password}   onChange={(e)=>{setPassword(e.target.value)}} />
                    <input type="password" placeholder='Confirm Password' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black'   value={ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                </div>

                <div className='flex justify-center items-center p-4 pb-10'>
                    <button className='bg-white px-4 py-2 rounded-xl hover:bg-slate-400 font-roboto flex justify-between gap-2 border border-black'>Submit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z"/></svg></button>
                </div>
            </Form>
            </div>
            {Spinner && (<div> 
                        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 z-50">
                        <DNA visible={true} height="180" width="180" ariaLabel="dna-loading" />
                        <h1 className='font-Varela text-xl text-white'>Loading... Please Wait</h1>
                        </div>
                      </div>
                    )}
        </div>
    </div>
  )
}

export default CreateDelivery