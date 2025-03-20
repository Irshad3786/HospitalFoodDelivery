import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function PatientUpdate() {
  const [phoneNo,setPhoneNo] = useState('')
      const [Name , setName] = useState('')
      const [Diseases , setDiseases] = useState('')
      const [Allergies , setAllergies] = useState('')
      const [RoomNumber , setRoomNumber] = useState('')
      const [BedNumber , setBedNumber] = useState('')
      const [FloorNumber , setFloorNumber] = useState('')
      const [Age,setAge] = useState('')
      const [PhoneNo , setPhoneNumber] = useState('')
      const [EmergencyContact ,setEmergencyContact] = useState('')
      const [Gender , setGender] = useState('')
      const [data , setdata] = useState(false)

  const Submit =(e)=>{
    e.preventDefault()
    console.log(phoneNo);
    
    if(!phoneNo){
      toast.warn("Please Enter the Phone NO")
    }else{
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/SearchPatient`,{ phoneNo })
      .then((res)=>{
        if(res.data.data == null){
          console.log(res);
          
          toast.warn("No User Found")
        }else{
          setdata(true)
          setName(res.data.data.Name)
          setDiseases(res.data.data.Diseases)
          setAllergies(res.data.data.Allergies)
          setRoomNumber(res.data.data.RoomNumber)
          setBedNumber(res.data.data.BedNumber)
          setFloorNumber(res.data.data.FloorNumber)
          setAge(res.data.data.Age)
          setPhoneNumber(res.data.data.PhoneNo)
          setEmergencyContact(res.data.data.EmergencyContact)
          setGender(res.data.data.Gender)
        }
        
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }


  const FinalSubmit = (e)=>{
    e.preventDefault();
      if(!Name || !Diseases || !Allergies || !RoomNumber || !BedNumber || !FloorNumber || !Age || !PhoneNo || !EmergencyContact || !Gender ){
          toast.info('Fill in all fields.')
      }else{
          axios.post(`${import.meta.env.VITE_BACKEND_URL}/UpatePatient`,{Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender})
                      .then((res)=>{
                        console.log(res);
                        
                          if(res.data.message === 'Patient details Updated successfully'){
                            setdata(false)
                            
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
            <h1 className='text-xl md:text-2xl'>Patient Details Update</h1>
            <div >
                <input type="number"  className='px-6 py-2 w-72' placeholder='Enter Patient PhoneNo' value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
            </div>
            <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400' onClick={Submit}>Submit</button>
        </div>
       {data && (<div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="text" placeholder='Diseases' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Diseases} onChange={(e)=>{setDiseases(e.target.value)}} />
                    <input type="text" placeholder='Allergies' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Allergies} onChange={(e)=>{setAllergies(e.target.value)}} />
                    <input type="number" placeholder='Room Number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={RoomNumber} min="1" onChange={(e)=>{setRoomNumber(e.target.value)}} />
                    <input type="number" placeholder='Bed Number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={BedNumber} min="1" onChange={(e)=>{setBedNumber(e.target.value)}} />
                    <input type="number" placeholder='Floor Number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={FloorNumber} min="1" onChange={(e)=>{setFloorNumber(e.target.value)}} />
                    <input type="number" placeholder='Age' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Age} min="1" onChange={(e)=>{setAge(e.target.value)}} />
                    <input type="text" placeholder='Phone No' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={PhoneNo}  onChange={(e)=>{setPhoneNumber(e.target.value)}} />
                    <input type="text" placeholder='Emergency Contact' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={EmergencyContact}  onChange={(e)=>{setEmergencyContact(e.target.value)}} />
                    <div className='p-4 rounded-md sm:w-[30%] flex flex-col md:flex md:flex-row justify-center items-center'>
                        <h1 className='p-2 font-Varela font-bold text-2xl text-gray-700'>Gender</h1>
                        <label className='p-4 font-Varela text-lg '>
                            <input type="radio"value="Male"checked={Gender === "Male"}onChange={(e) => setGender(e.target.value)}/>Male
                        </label>
                        <label className='p-4 font-Varela text-lg'>
                            <input type="radio"value="Female"checked={Gender === "Female"}  onChange={(e) => setGender(e.target.value)}/>Female
                        </label>
                        <label className='p-4 font-Varela text-lg'>
                            <input type="radio"value="Other"checked={Gender === "Other"}onChange={(e) => setGender(e.target.value)}/>Other
                        </label>
                    </div>
                    <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400' onClick={FinalSubmit}>Update</button>
            </div>)}
    </div>
  )
}

export default PatientUpdate