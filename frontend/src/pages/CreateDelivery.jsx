import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function CreateDelivery() {
      const [Name , setName] = useState('')
      const [ContactInfo , setContactInfo] = useState('')
      const [Location , setLocation] = useState('')
      const [EmergencyNo , setEmergencyNo] = useState('')
      const [Password , setPassword ]= useState('')
      const [ConfirmPassword , setConfirmPassword] = useState('')
      
      const PantryDataSubmit = (e)=>{
        e.preventDefault();
        
        if(!Name || !ContactInfo || !Location || !EmergencyNo || !Password || !ConfirmPassword ){
            toast.info('Fill in all fields.')
        }else if(Password != ConfirmPassword ){
            toast.info('Confirm Password is Not Correct')
        }else{
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/CreateDelivery`,{Name,ContactInfo,Location,EmergencyNo,Password})
            .then((res)=>{
                if(res.data.message === 'Delivery Account Created Successfully'){
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
                <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
                <h1 className='text-3xl font-outfit text-center p-5 font-semibold'>Create Delivery</h1>
            </div>
            <div>
            <ToastContainer/>
             
            <Form onSubmit={PantryDataSubmit}>
                <div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="number" placeholder='Contact No' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={ContactInfo} onChange={(e)=>{setContactInfo(e.target.value)}} />
                    <input type="text" placeholder='Working Pantry Name' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Location} onChange={(e)=>{setLocation(e.target.value)}} />
                    <input type="number" placeholder='Emergency Contact Number' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={EmergencyNo}  onChange={(e)=>{setEmergencyNo(e.target.value)}} />
                    <input type="password" placeholder='Password' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Password}   onChange={(e)=>{setPassword(e.target.value)}} />
                    <input type="password" placeholder='Confirm Password' className='p-3 rounded-md sm:w-[30%] shadow-lg'   value={ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                </div>

                <div className='flex justify-center items-center p-4 pb-10'>
                    <button className='bg-white px-4 py-2 rounded-xl hover:bg-slate-400 font-roboto'>Submit</button>
                </div>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default CreateDelivery