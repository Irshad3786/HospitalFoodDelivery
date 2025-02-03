import React from 'react'
import io from 'socket.io-client';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function CreateDiet() {

 const [Patientdata, setPatientData] = useState([]) 



 useEffect(()=>{
  axios.get(`${import.meta.env.VITE_BACKEND_URL}/FullPatientData`)
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
    });
  
    return () => {
      socket.off('patientCreated');
    };
  }, []);


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
              <input type="radio" />
            </div>
            <div className='flex justify-between items-center gap-4 w-[40%] md:w-[12%] md:justify-between'>
              <h1 className='text-neutral-100'>Evening</h1>
              <input type="radio" />
            </div>
            <div className='flex justify-between items-center gap-4 w-[40%] md:w-[12%] md:justify-between'>
              <h1 className='text-neutral-100'>Night</h1>
              <input type="radio" />
            </div>
            
          </div>

          <div className='bg-gray-800 w-[90%] h-52 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Patient Details</h1>
              <div>
                <input type="search" className='rounded-md p-2 md:w-72' placeholder='Search Patient' />
              </div>
              <div className='p-2'>
                <select className='px-5 p-1 rounded-lg md:px-8'>
                <option value="">Name</option>

                {
                  Patientdata.map((dataval)=>(
                    <option value="">{dataval.Name}</option>
                  ))
                }
                </select>
              </div>

              <div className='p-2'>
                <select className='px-4 p-1 rounded-lg'>
                <option value="">Room No</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
          </div>
          <div className='bg-gray-800 w-[90%] h-64 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Food Chat</h1>
              <div>
                <input type="search" className='rounded-md p-2 md:w-72' placeholder='Search Food Items' />
              </div>
              <div className='p-2'>
                <select className='px-2 p-1 rounded-lg md:px-10'>
                  <option value="">Food Items</option>
                  <option value="">apple with milk 1/2 </option>
                  <option value="">orange juice boild egg</option>
                  <option value="">srinu</option>
                  <option value="">sivaha</option>
                  <option value="">prabhu</option>
                </select>
              </div>

              <div className='p-2'>
                <input type="text" placeholder='Add Specific Food Items' className='p-2 rounded-xl md:w-72' />
              </div>

              <div className='p-2'>
                <input type="text" placeholder='Add Ingredents' className='p-2 rounded-xl md:w-72' />
              </div>
          </div>


          <div className='bg-gray-800 w-[90%] h-40 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg text-white underline'>Assign Pantry</h1>
              
              <div className='p-2'>
                <select className='px-2 p-1 rounded-lg md:px-10'>
                  <option value="">Select Pantry</option>
                  <option value="">FLORE ONE </option>
                  <option value="">BIO PANTY</option>
                  <option value="">pple with milk 1/2</option>
                  <option value="">pple with milk 1/2</option>
                  <option value="">pple with milk 1/2</option>
                </select>
              </div>
          </div>

          <button className='bg-gray-950 font-roboto px-4 p-2 rounded-md text-white hover:bg-slate-400 hover:text-slate-950'>Submit</button>
          
        </div>
      </div>
    </div>
  )
}

export default CreateDiet