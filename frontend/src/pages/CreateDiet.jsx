import React from 'react'
import io from 'socket.io-client';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import PatientListItems from '../components/PatientListItems';
import FoodListItems from '../components/FoodListItems';


function CreateDiet() {

 const [Patientdata, setPatientData] = useState([]) 

 const [Pantrydata , setPantrydata] = useState([])

 const [Shift , setShift] = useState('')

 const [PatientSearch , setPatientSearch] = useState('')

 const [PantrySelected , setPantrySelected] = useState('')

 const [selectedPatient, setSelectedPatient] = useState(null)
 const [selectedFood , setSelectedFood] = useState(null)
 const [SpecificItems , setSpecificItems] = useState('')
 const [AddIngredents , setAddIngredents] = useState('')
 const [FoodSearch,setFoodSearch] = useState('')

 
  
  

 useEffect(()=>{
  axios.get(`${import.meta.env.VITE_BACKEND_URL}/FullPatientData`)
  .then((data)=>{
    
  })
  .catch((error)=>{
    console.log(error);
  })
 },[])


 useEffect(()=>{
  axios.get(`${import.meta.env.VITE_BACKEND_URL}/FullPantryData`)
  .then((data)=>{
    
  })
  .catch((error)=>{
    console.log(error);
  })
 },[])




  useEffect(() => {
    const socket = io(import.meta.env.VITE_BACKEND_URL);

    socket.on('patientCreated', (patientData) => {
      setPatientData(patientData)
    })

    socket.on('PantryCreated', (data) => {
      
      setPantrydata(data)
    });
  
    return () => {
      socket.off('patientCreated');
      socket.off('PantryCreated');
    };
  }, []);


 
 const finalSubmitFood =()=>{
  console.log(Shift,selectedPatient,selectedFood,SpecificItems,AddIngredents,PantrySelected)
  
 }

  
    


  return (
    <div className='w-[100%] h-[100%] bg-[#00FFAA] flex flex-col justify-center items-center pb-12'>
      <div className='p-4 w-full'>
        <button className='flex justify-center items-center text-lg shadow-lg font-semibold bg-white  rounded-xl pr-5 font-roboto hover:bg-slate-400'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"/></svg>Back </button>
      </div>

      <h1 className='font-outfit text-4xl  p-6 font-semibold'>Create Diet</h1>
      <div className='w-[85%] bg-white rounded h-[80%] shadow-xl font-roboto '>
        <div className='flex flex-col  justify-center items-center gap-4 py-8'>
          <div className='bg-gray-800 w-[90%] h-40 rounded-lg flex flex-col justify-center items-center'>
            <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Shift Meal Plan</h1>
            <div className='flex justify-between items-center gap-4 w-[40%] md:w-[12%] md:justify-between'>
              <h1 className='text-neutral-100'>Morning</h1>
              <input type="radio" value='Morning' checked={Shift === 'Morning'} onChange={(e)=>{setShift(e.target.value)}} className='cursor-pointer' />
            </div>
            <div className='flex justify-between items-center gap-4 w-[40%] md:w-[12%] md:justify-between'>
              <h1 className='text-neutral-100'>Evening</h1>
              <input type="radio" value='Evening' checked={Shift === 'Evening'} onChange={(e)=>{setShift(e.target.value)}} className='cursor-pointer' />
            </div>
            <div className='flex justify-between items-center gap-4 w-[40%] md:w-[12%] md:justify-between'>
              <h1 className='text-neutral-100'>Night</h1>
              <input type="radio" value='Night' checked={Shift === 'Night'} onChange={(e)=>{setShift(e.target.value)}} className='cursor-pointer' />
            </div>
            
          </div>

          <div className='bg-gray-800 w-[90%] h-96 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Patient Details</h1>
              <div>
                <input type="search" className='rounded-md p-2 md:w-72' placeholder='Search Patient' value={PatientSearch} onChange={(e)=>{setPatientSearch(e.target.value)}} />
              </div>
              <div className='pt-3'>
                <PatientListItems data={Patientdata} search = {PatientSearch} onSelectPatient={setSelectedPatient}/>
              </div>
          </div>
          <div className='bg-gray-800 w-[90%] h-[70%] rounded-lg flex flex-col justify-center items-center pb-4'>
              <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Food Chat</h1>
              <div className='pb-6'>
                <input type="search" className='rounded-md p-2 md:w-72' placeholder='Search Food Items' value={FoodSearch} onChange={(e)=>{setFoodSearch(e.target.value)}} />
              </div>
             <FoodListItems searchTerm={FoodSearch} onSelectFood = {setSelectedFood}/>

              <div className='p-2'>
                <input type="text" placeholder='Add Specific Food Items' className='p-2 rounded-xl md:w-72' value={SpecificItems} onChange={(e)=>{setSpecificItems(e.target.value)}}  />
              </div>

              <div className='p-2'>
                <input type="text" placeholder='Add Ingredents' className='p-2 rounded-xl md:w-72' value={AddIngredents} onChange={(e)=>{setAddIngredents(e.target.value)}} />
              </div>
          </div>


          <div className='bg-gray-800 w-[90%] h-40 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Assign Pantry</h1>
              
              <div className='p-2'>
                <select
                  className='px-2 p-1 rounded-lg md:px-10'
                  onChange={(e) => {
                    const selectedObject = Pantrydata.find(data => String(data.PantryNo) === e.target.value);
                    setPantrySelected(selectedObject || null);
                  }}
                >
                  <option value=''>Select Pantry</option>
                  {Pantrydata.map((data, index) => (
                    <option value={String(data.PantryNo)} key={index}>{data.Name}</option>
                  ))}
                </select>
              </div>
          </div>

          <button className='bg-gray-950 font-roboto px-4 p-2 rounded-md text-white hover:bg-slate-400 hover:text-slate-950' onClick={finalSubmitFood}>Submit</button>
          
        </div>
      </div>
    </div>
  )
}

export default CreateDiet