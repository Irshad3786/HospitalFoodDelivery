import React from 'react'

function PatientUpdate() {
  return (
    <div className='bg-[#00FFAA] w-[100%] h-screen font-Varela'>
        <div className='flex justify-center items-center pt-24 font-bold flex-col gap-3'>
            <h1 className='text-xl md:text-2xl'>Patient Details Update</h1>
            <div >
                <input type="number"  className='px-6 py-2' placeholder='Enter Patient PhoneNo'/>
            </div>
            <button className='px-5 py-2 bg-white rounded-lg hover:bg-slate-400'>Submit</button>
        </div>
    </div>
  )
}

export default PatientUpdate