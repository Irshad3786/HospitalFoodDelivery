import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function ManagerDashboard() {

    const Navigate = useNavigate()

    const AddPatientFun =()=>{
        Navigate('/AddPatient')
    }

    const CreateDietFun =()=>{
        Navigate('/CreateDiet')
    }

    const PantryBoxFun =()=>{
        Navigate('/PantryBox')
    }

    const TrackMealsFun=()=>{
        Navigate('/TrackMeals')
    }

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


  return (
    <div>
        <div className='bg-[#00FFAA] h-screen w-[100%] sm:h-screen '>
            <div className='md:flex md:justify-center md:items-center md:gap-8 sm:flex border border-b-black'>
                <div className='pt-6'><h1 className='font-outfit text-lg text-center font-semibold md:text-3xl md:p-6 '>Manager Dashboard</h1></div>
                <div className='flex p-2 justify-between items-center md:gap-5 '>
                    <div className='bg-white w-[48%] rounded-lg hover:bg-slate-500  flex justify-center items-center text-center border border-black'> 
                        <button className='font-roboto p-3 rounded-md flex justify-center items-center hover:bg-slate-500 gap-3 text-sm font-semibold text-center md:w-40 ' onClick={AddPatientFun}>Add Patient <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M16 14q-1.25 0-2.125-.875T13 11t.875-2.125T16 8t2.125.875T19 11t-.875 2.125T16 14m-5 6q-.425 0-.712-.288T10 19v-.9q0-.525.25-1t.7-.75q1.125-.675 2.388-1.012T16 15t2.663.338t2.387 1.012q.45.275.7.75t.25 1v.9q0 .425-.288.713T21 20zm-1-6H4q-.425 0-.712-.288T3 13t.288-.712T4 12h6q.425 0 .713.288T11 13t-.288.713T10 14m4-8H4q-.425 0-.712-.288T3 5t.288-.712T4 4h10q.425 0 .713.288T15 5t-.288.713T14 6m-2.9 4H4q-.425 0-.712-.288T3 9t.288-.712T4 8h8q-.35.425-.562.925T11.1 10"/></svg></button>
                    </div>
                    <div className='bg-white w-[48%] rounded-lg hover:bg-slate-500  flex justify-center items-center text-center border border-black'>
                        <button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40 ' onClick={CreateDietFun}> Create Diet <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1.5-.51V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.59A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5zm16 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"/></svg>
                        </button>
                    </div>
                </div>

                <div className='flex p-2 justify-between items-center md:gap-5 '>
                    <div className='bg-white w-[48%] rounded-lg hover:bg-slate-500  flex justify-center items-center text-center border border-black'><button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40' onClick={PantryBoxFun}>Add Pantry<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 1.5c-1.77 0-3.33 1.17-3.83 2.87C8.14 4.13 7.58 4 7 4a4 4 0 0 0-4 4a4.01 4.01 0 0 0 3 3.87V19h13v-7.13c1.76-.46 3-2.05 3-3.87a4 4 0 0 0-4-4c-.58 0-1.14.13-1.67.37c-.5-1.7-2.06-2.87-3.83-2.87m-.5 9h1v7h-1zm-3 2h1v5H9zm6 0h1v5h-1zM6 20v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1z"/></svg></button></div>
                    <div className='bg-white w-[48%] rounded-lg  hover:bg-slate-500 flex justify-center items-center text-center border border-black'><button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40' onClick={TrackMealsFun}>Track Meals <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21zm4.5-3q.2 0 .35-.15t.15-.35V14q.625 0 1.063-.437T12.5 12.5V10q0-.2-.15-.35T12 9.5t-.35.15t-.15.35v2.5H11V10q0-.2-.15-.35t-.35-.15t-.35.15T10 10v2.5h-.5V10q0-.2-.15-.35T9 9.5t-.35.15t-.15.35v2.5q0 .625.438 1.063T10 14v3.5q0 .2.15.35t.35.15m4 0q.2 0 .35-.15t.15-.35v-7.35q0-.275-.187-.462T14.35 9.5q-.675 0-1.012.625T13 11.5v2q0 .4.363.563T14 14.5v3q0 .2.15.35t.35.15"/></svg></button></div>
                </div>
            </div>

            <div className='flex justify-center items-center w-[100%] h-[85%]'>
                <h1>Hello</h1>
            </div>
        </div>
    </div>
  )
}

export default ManagerDashboard