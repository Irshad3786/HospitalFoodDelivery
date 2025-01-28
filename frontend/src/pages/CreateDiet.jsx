import React from 'react'

function CreateDiet() {
  return (
    <div className='w-[100%] h-[100%] bg-[#00FFAA] flex flex-col justify-center items-center'>
          <h1 className='font-outfit text-4xl  p-4'>Create Diet</h1>
      <div className='w-[85%] bg-white rounded h-[80%] shadow-xl font-roboto'>
        <div className='flex flex-col  justify-center items-center gap-4 py-8'>
          <div className='bg-slate-400 w-[90%] h-40 rounded-lg flex flex-col justify-center items-center'>
            <h1 className='font-roboto font-semibold p-2 text-lg'>Shift Meal Plan</h1>
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

          <div className='bg-slate-400 w-[90%] h-52 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg'>Patient Details</h1>
              <div>
                <input type="search" className='rounded-md p-2 md:w-72' placeholder='Search Patient' />
              </div>
              <div className='p-2'>
                <select className='px-5 p-1 rounded-lg md:px-8'>
                <option value="">Name</option>
                  <option value="">Rahul</option>
                  <option value="">Ramesh</option>
                  <option value="">srinu</option>
                  <option value="">sivaha</option>
                  <option value="">prabhu</option>
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
          <div className='bg-slate-400 w-[90%] h-64 rounded-lg flex flex-col justify-center items-center'>
              <h1 className='font-roboto font-semibold p-2 text-lg'>Food Chat</h1>
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

          <button className='bg-gray-950 font-roboto px-4 p-2 rounded-md text-white hover:bg-slate-400 hover:text-slate-950' >Submit</button>
          
        </div>
      </div>
    </div>
  )
}

export default CreateDiet