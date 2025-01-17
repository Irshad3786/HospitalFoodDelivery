import React from 'react'
import { Form, Link } from 'react-router-dom'

function ManagerLogin() {
  return (
    <div>
      <div className='bg-[#00FFAA] w-[100%] h-screen'>
        <h1 className='text-center pt-10 text-xl font-mono sm:text-2xl md:text-3xl'>Manager Dashboard Login</h1>
        <Form >
            <div className='flex flex-col justify-center items-center gap-7 pt-28'>
              <input type="email" className='p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter Email'/>
              <input type="password" className='p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter Password ' />
              
              <button className='p-2 bg-white rounded-lg shadow-xl px-3 font-roboto hover:bg-slate-500'>Login</button>
            </div>
        </Form>
        <h6 className='text-center pt-7 font-roboto'>Don't have an account ?<Link to='/CreateAccount' className='text-sky-950 font-mono  p-2 rounded-lg font-semibold underline'>CreateAccount </Link></h6>
      </div>
    </div>
  )
}

export default ManagerLogin