import React from 'react'

function Card({OrderData}) {
  return (
    <div className='w-[80%] md:w-fit h-[90%] bg-slate-900 rounded-xl text-white md:p-14 p-2 font-roboto shadow-xl'>

        <div className='md:flex md:justify-center md:gap-80'>
        
        
        <div className='flex flex-col justify-center items-center gap-2' >
            <h1 className='font-semibold underline text-center p-2'>Patient Details</h1>
            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Name </h6>
                <h6 className='text-white'>{OrderData.Patient.Name}</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Room No </h6>
                <h6 className='text-white'>{OrderData.Patient.RoomNumber}</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Bed No </h6>
                <h6 className='text-white'>{OrderData.Patient.BedNumber}</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Floor No </h6>
                <h6 className='text-white'>{OrderData.Patient.FloorNumber}</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >PhoneNo </h6>
                <h6 className='text-white'>{OrderData.Patient.PhoneNo}</h6>
            </div>
            
        </div>

        
        
        <div className='flex flex-col justify-center md:justify-normal items-center gap-2' >
            <h1 className='font-semibold underline text-center p-2 '>Pantry Details</h1>
            <div className='flex  gap-2 bg-red-300 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Pantry Name </h6>
                <h6 className='text-white'>{OrderData.Pantry.Name}</h6>
            </div>

            <div className='flex  gap-2 bg-red-300 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Pantry No </h6>
                <h6 className='text-white'>{OrderData.Pantry.PantryNo}</h6>
            </div>

            <div className='flex  gap-2 bg-red-300 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >PhoneNo</h6>
                <h6 className='text-white md:w-80'>{OrderData.Pantry.PhoneNo}</h6>
            </div>
            
            </div>

        </div>

        
        <div className='md:flex md:justify-center md:gap-80'>
        
        <div className='flex flex-col justify-center items-center gap-2' >
            <h1 className='font-semibold underline text-center p-2'>Delivery Person</h1>
            <div className='flex  gap-2 bg-purple-300 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Name</h6>
                <h6 className='text-white'>Suraj</h6>
            </div>

            <div className='flex  gap-2 bg-purple-300 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >Phone No </h6>
                <h6 className='text-white'>9963629056</h6>
            </div>
        </div>

        
        
        <div className='flex flex-col justify-center items-center gap-2 md:justify-normal' >
            <h1 className='font-semibold underline text-center p-2'>Food</h1>
            <div className='flex  gap-2 bg-cyan-300 p-2 rounded-md text-slate-950 w-[95%] md:w-80'>
                <h6 >{OrderData.FoodItem}</h6>
                <h6 >{OrderData.SpecificFoodItem}</h6>
            </div>
        </div>

        </div>


        <h1 className='font-semibold underline text-center p-2'>Status</h1>
        
        <div className='flex flex-col justify-center items-center gap-2' >
            <div className={`flex  gap-2 ${OrderData.Status == "Order Accepted" ? 'bg-green-700' : 'bg-red-700' } p-2 justify-center rounded-md text-slate-950 w-[95%] md:w-64`}>
                <h6 className='font-semibold'>{OrderData.Status}</h6>
            </div>

        </div>
    </div>
  )
}

export default Card