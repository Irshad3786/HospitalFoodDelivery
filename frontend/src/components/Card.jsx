import React from 'react'

function Card() {
  return (
    <div className='w-[80%] h-80 bg-slate-900 rounded-xl text-white p-6 font-roboto'>
        <h1 className='font-semibold underline text-center p-2'>Patient Details</h1>
        
        <div className='flex flex-col justify-center items-center gap-2' >
            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%]'>
                <h6 >Name </h6>
                <h6 className='text-white'>Irshad</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%]'>
                <h6 >Room No </h6>
                <h6 className='text-white'>1</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%]'>
                <h6 >Bed No </h6>
                <h6 className='text-white'>16</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%]'>
                <h6 >Floor No </h6>
                <h6 className='text-white'>1</h6>
            </div>

            <div className='flex  gap-2 bg-slate-400 p-2 rounded-md text-slate-950 w-[95%]'>
                <h6 >PhoneNo </h6>
                <h6 className='text-white'>9182278505</h6>
            </div>
            
        </div>
    </div>
  )
}

export default Card