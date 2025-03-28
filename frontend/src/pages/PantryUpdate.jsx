import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function PantryUpdate() {
  const [phoneNo,setPhoneNo] = useState('')
            const [PantryName , setPantryName] = useState('')
            const [ContactInfo , setContactInfo] = useState('')
            const [Location , setLocation] = useState('')
            const [PantryNo , setPantryNo] = useState('')
            const [Password , setPassword ]= useState('')
          const Navigate =   useNavigate()
        const [data , setdata] = useState(false)

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
  
  
    const Submit =(e)=>{
      e.preventDefault()
      
      if(!phoneNo){
        toast.warn("Please Enter the Phone NO")
      }else{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/SearchPantry`,{ phoneNo })
        .then((res)=>{
          if(res.data.data == null){
            toast.warn("No User Found")
          }else{
            setdata(true)
            console.log(res);
            
                    setPantryName(res.data.data.Name)
                    setContactInfo(res.data.data.PhoneNo)
                    setLocation(res.data.data.Location)
                    setPantryNo(res.data.data.PantryNo)
                    setPassword('')
          }
          
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    }
  
  
    const FinalSubmit = (e)=>{
      e.preventDefault();
        if(!PantryName || !ContactInfo || !Location || !PantryNo || !Password  ){
            toast.info('Fill in all fields.')
        }else{
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/UpdatePantry`,{PantryName,ContactInfo,Location,PantryNo,Password})
                        .then((res)=>{
                          console.log(res);
                          
                            if(res.data.message === 'Pantry details Updated successfully'){
                              setdata(false)
                              setPantryName('')
                              setContactInfo('')
                              setLocation('')
                              setPantryNo('')
                              setPassword('')
                            }
                        })
                        .catch((error)=>{
                            if(error.response.data.message === ' PhoneNo already exists'){
                                toast.warn('PhoneNo already exists.')
                                
                            }
                            
                        })
        }
    }
  return (
    <div className='bg-[#00FFAA] w-[100%] min-h-screen font-Varela'>
       <ToastContainer/>
        <div className='flex justify-center items-center pt-24 font-bold flex-col gap-3'>
        <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400 absolute left-2 top-3' onClick={()=>{
                    Navigate('/ManagerDashboard')
                }}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
            <h1 className='text-xl md:text-2xl'>Pantry Details Update</h1>
            <div >
                <input type="number"  className='px-6 py-2 w-72' placeholder='Enter Pantry PhoneNo' value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
            </div>
            <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400' onClick={Submit}>Submit</button>
        </div>
       {data && (<div className='flex flex-col justify-center items-center p-4 gap-4 '>
                   <input type="text" placeholder='Pantry Name' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={PantryName} onChange={(e)=>{setPantryName(e.target.value)}} />
                    
                    <input type="text" placeholder='Location' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Location} onChange={(e)=>{setLocation(e.target.value)}} />
                    <input type="number" placeholder='Pantry No' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={PantryNo}  onChange={(e)=>{setPantryNo(e.target.value)}} />
                    <input type="password" placeholder='Password' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Password}   onChange={(e)=>{setPassword(e.target.value)}} />
                    <div className='p-4 rounded-md sm:w-[30%] flex flex-col md:flex md:flex-row justify-center items-center'>
                    </div>
                    <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400' onClick={FinalSubmit}>Update</button>
            </div>)}
    </div>
  )
}

export default PantryUpdate