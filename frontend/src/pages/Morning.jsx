import React from 'react'
import Card from '../components/Card'

function Morning() {
  return (
    <div className='w-[100%] h-screen bg-[#00FFAA]'>
      <div>
        <h1 className='text-center font-outfit text-2xl p-4'>Moring Food List</h1>
        <div>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Morning