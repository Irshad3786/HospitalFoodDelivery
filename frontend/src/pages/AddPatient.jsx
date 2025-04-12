import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { DNA } from 'react-loader-spinner'




function AddPatient() {

    const Navigate = useNavigate() 
    const [Name , setName] = useState('')
    const [Diseases , setDiseases] = useState('')
    const [Allergies , setAllergies] = useState('')
    const [RoomNumber , setRoomNumber] = useState('')
    const [BedNumber , setBedNumber] = useState('')
    const [FloorNumber , setFloorNumber] = useState('')
    const [Age,setAge] = useState('')
    const [PhoneNo , setPhoneNo] = useState('')
    const [EmergencyContact ,setEmergencyContact] = useState('')
    const [Gender , setGender] = useState('')
     const [Spinner,setSpinner] = useState(false)


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



    const navigate = useNavigate()

    const PatientDataSubmit = (e)=>{
        e.preventDefault();
        if(!Name || !Diseases || !Allergies || !RoomNumber || !BedNumber || !FloorNumber || !Age || !PhoneNo || !EmergencyContact || !Gender ){
            toast.info('Fill in all fields.')
        }else{
            setSpinner(true)
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/CreatePatient`,{Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender})
            .then((res)=>{
                if(res.data.message === 'Patient Account Created Successfully'){
                    setSpinner(false)
                    toast.success('Patient Created Successfully')
                    setName('')
                    setDiseases('')
                    setAllergies('')
                    setRoomNumber('')
                    setBedNumber('')
                    setFloorNumber('')
                    setAge('')
                    setPhoneNo('')
                    setEmergencyContact('')
                    setGender('')
                }
            })
            .catch((error)=>{
                if(error.response.data.message === ' PhoneNo already exists'){
                    setSpinner(false)
                    toast.warn('PhoneNo already exists.')
                    
                }
                
            })
        }
    }


    const back =()=>{
        navigate('/ManagerDashboard')
    }

  return (
    <div className='bg-[#00FFAA] w-[100%] h-[100%]'>
        <ToastContainer/>
        <div >
            <div className='p-4 '>
                <button onClick={back} className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
                <h1 className='text-3xl font-Varela text-center p-5 font-bold'>Add Patient</h1>
            </div>
            <div>

             
            <Form onSubmit={PatientDataSubmit}>
                <div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="text" placeholder='Diseases' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Diseases} onChange={(e)=>{setDiseases(e.target.value)}} />
                    <input type="text" placeholder='Allergies' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Allergies} onChange={(e)=>{setAllergies(e.target.value)}} />
                    <input type="number" placeholder='Room Number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={RoomNumber} min="1" onChange={(e)=>{setRoomNumber(e.target.value)}} />
                    <input type="number" placeholder='Bed Number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={BedNumber} min="1" onChange={(e)=>{setBedNumber(e.target.value)}} />
                    <input type="number" placeholder='Floor Number' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={FloorNumber} min="1" onChange={(e)=>{setFloorNumber(e.target.value)}} />
                    <input type="number" placeholder='Age' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={Age} min="1" onChange={(e)=>{setAge(e.target.value)}} />
                    <input type="text" placeholder='Phone No' className='border border-black p-3 rounded-md sm:w-[30%] shadow-lg' value={PhoneNo}  onChange={(e)=>{setPhoneNo(e.target.value)}} />
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
                </div>
                <div className='flex justify-center items-center p-4 pb-10'>
                <button className='bg-white px-4 py-2 rounded-xl hover:bg-slate-400 font-Varela flex gap-2 justify-center items-center border border-black'>Submit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z"/></svg></button>
                </div>
            </Form>
            </div>
            {Spinner && (<div> 
                                <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 z-50">
                                <DNA visible={true} height="180" width="180" ariaLabel="dna-loading" />
                                <h1 className='font-Varela text-xl text-white'>Adding Patient... Please Wait</h1>
                                </div>
                              </div>
                            )}
        </div>
    </div>
  )
}

export default AddPatient