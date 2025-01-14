import React from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'

function Management() {
    const Navigate = useNavigate()
  return (
    <div className='w-[100%] h-screen bg-[#00FFAA]'>

        <div className='flex justify-center items-center p-8'>
            <h1 className='font-roboto font-semibold text-3xl '>Create Your Food Manager Account</h1>
        </div>
        <div>
            <Form>
                <div className='flex flex-col justify-center items-center p-4 gap-4 '>
                    <input type="text" placeholder='Full Name' className='p-3 rounded-md sm:w-[30%] shadow-lg' />
                    <input type="email" placeholder='Email' className='p-3 rounded-md sm:w-[30%] shadow-lg' />
                    <input type="text" placeholder='Phone number' className='p-3 rounded-md sm:w-[30%] shadow-lg'/>
                    <input type="text" placeholder='Employe ID' className='p-3 rounded-md sm:w-[30%] shadow-lg'/>
                    <input type="password" placeholder='Password' className='p-3 rounded-md sm:w-[30%] shadow-lg' />
                    <input type="password"  placeholder='Confirm Password' className='p-3 rounded-md sm:w-[30%] shadow-lg'/>
                </div>
                <div className='flex justify-center items-center p-4'>
                    <button className='bg-white px-4 py-2 rounded-xl hover:bg-slate-400 font-roboto'>Submit</button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default Management