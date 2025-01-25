import React, { useState } from 'react'
import { Form } from 'react-router-dom'

function AddPatient() {
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

    const PatientDataSubmit = ()=>{
        console.log(Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender);
        
    }

  return (
    <div className='bg-[#00FFAA] w-[100%] h-[100%]'>
        <div >
            <h1 className='text-3xl font-outfit text-center p-5 font-semibold'>Add Patient</h1>
            <div>

             
            <Form onSubmit={PatientDataSubmit}>
                <div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="text" placeholder='Diseases' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Diseases} onChange={(e)=>{setDiseases(e.target.value)}} />
                    <input type="text" placeholder='Allergies' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Allergies} onChange={(e)=>{setAllergies(e.target.value)}} />
                    <input type="number" placeholder='Room Number' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={RoomNumber} onChange={(e)=>{setRoomNumber(e.target.value)}} />
                    <input type="number" placeholder='Bed Number' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={BedNumber} onChange={(e)=>{setBedNumber(e.target.value)}} />
                    <input type="number" placeholder='Floor Number' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={FloorNumber} onChange={(e)=>{setFloorNumber(e.target.value)}} />
                    <input type="number" placeholder='Age' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={Age} onChange={(e)=>{setAge(e.target.value)}} />
                    <input type="text" placeholder='Phone No' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={PhoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} />
                    <input type="text" placeholder='Emergency Contact' className='p-3 rounded-md sm:w-[30%] shadow-lg' value={EmergencyContact} onChange={(e)=>{setEmergencyContact(e.target.value)}} />
                    <div className='p-4 rounded-md sm:w-[30%] flex flex-col md:flex md:flex-row justify-center items-center'>
                        <h1 className='p-2 font-roboto font-bold text-2xl text-gray-700'>Gender</h1>
                        <label className='p-4 font-roboto text-lg '>
                            <input type="radio"value="Male"checked={Gender === "Male"}onChange={(e) => setGender(e.target.value)}/>Male
                        </label>
                        <label className='p-4 font-roboto text-lg'>
                            <input type="radio"value="Female"checked={Gender === "Female"}  onChange={(e) => setGender(e.target.value)}/>Female
                        </label>
                        <label className='p-4 font-roboto text-lg'>
                            <input type="radio"value="Other"checked={Gender === "Other"}onChange={(e) => setGender(e.target.value)}/>Other
                        </label>
                    </div>
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

export default AddPatient