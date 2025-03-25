import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function UpdateDelivery() {
    const [phoneNo,setPhoneNo] = useState('')
    const [Name , setName] = useState('')
    const [ContactInfo , setContactInfo] = useState('')
    const [Location , setLocation] = useState('')
    const [EmergencyNo , setEmergencyNo] = useState('')
    const [Password , setPassword ]= useState('')

    const [data , setdata] = useState(false)

const Submit =(e)=>{
e.preventDefault()

if(!phoneNo){
toast.warn("Please Enter the Phone NO")
}else{
axios.post(`${import.meta.env.VITE_BACKEND_URL}/SearchDelivery`,{ phoneNo })
.then((res)=>{
  if(res.data.data == null){
    toast.warn("No User Found")
  }else{
    setdata(true)
    console.log(res);
    setName(res.data.data.Name)
    setContactInfo(res.data.data.PhoneNo)
    setLocation(res.data.data.Location)
    setEmergencyNo(res.data.data.EmergencyNo)
    setPassword("")
   
           
  }
  
})
.catch((error)=>{
  console.log(error);
})
}
}


const FinalSubmit = (e)=>{
e.preventDefault();
if(!Name || !ContactInfo || !Location || !EmergencyNo || !Password   ){
    toast.info('Fill in all fields.')
}else{
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/UpdateDelivery`,{Name,ContactInfo,Location,EmergencyNo,Password})
                .then((res)=>{
                  console.log(res);
                  
                    if(res.data.message === 'Delivery details Updated successfully'){
                      setdata(false)
                      setName('')
                      setContactInfo('')
                      setLocation('')
                      setEmergencyNo('')
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
    <h1 className='text-xl md:text-2xl'>Delivery Details Update</h1>
    <div >
        <input type="number"  className='px-6 py-2 w-72' placeholder='Enter Pantry PhoneNo' value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
    </div>
    <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400' onClick={Submit}>Submit</button>
</div>
{data && (<div className='flex flex-col justify-center items-center p-4 gap-4 '>
    <input type="text" placeholder='Full Name' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={Name} onChange={(e)=>{setName(e.target.value)}} />

                    <input type="text" placeholder='Working Pantry Name' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={Location} onChange={(e)=>{setLocation(e.target.value)}} />
                    <input type="number" placeholder='Emergency Contact Number' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={EmergencyNo}  onChange={(e)=>{setEmergencyNo(e.target.value)}} />
                    <input type="password" placeholder='Password' className='p-3 rounded-md sm:w-[30%] shadow-lg border border-black' value={Password}   onChange={(e)=>{setPassword(e.target.value)}} />
                    
            <div className='p-4 rounded-md sm:w-[30%] flex flex-col md:flex md:flex-row justify-center items-center'>
                </div>
            <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400' onClick={FinalSubmit}>Update</button>
    </div>)}
</div>
)
}

export default UpdateDelivery