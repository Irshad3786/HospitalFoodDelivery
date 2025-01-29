import React from 'react'
import Card from '../components/Card'

function Morning() {
  return (
    <div className='w-[100%] h-[100%] bg-[#00FFAA]'>
      <div>
        <h1 className='text-center font-outfit text-2xl p-4 font-semibold md:text-4xl'>Moring  List</h1>
        <div className='flex justify-center items-center flex-col gap-14 p-2'>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Morning