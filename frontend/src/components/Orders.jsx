import React from 'react'


function Orders({orders}) {
  return (
    <div className='bg-slate-400 w-[90%] h-fit p-4 rounded-3xl flex justify-center items-center font-roboto sm:w-[60%] md:w-[40%] shadow-2xl'>
        <div  className='bg-white w-[90%] h-fit rounded-3xl drop-shadow-2xl flex pt-2  flex-col items-center'>
            <div className='bg-gray-900 h-fit rounded-2xl w-[90%] flex justify-center drop-shadow-xl  p-2 flex-col'>
                <div className="w-fit bg-[#00FFAA] px-4 py-1 rounded-2xl mx-auto">
                    <h1 className='text-black text-sm text-center font-semibold'>Food Item</h1>
                </div>
                <div className='flex justify-center items-center p-3'>
                    <p className='text-white text-base max-h-20 overflow-auto scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>{orders.FoodItem}  {orders.Ingredients && `with ${orders.Ingredients}`}  {orders.SpecificFoodItem && `Other Items :  ${orders.SpecificFoodItem}`}</p>
                </div>
            </div>

            <div className='p-4' >
                <button className='bg-green-500 px-5 py-1 rounded-2xl font-outfit shadow-lg'>Accept Order</button>
            </div>
            
        </div>
    </div>
  )
}

export default Orders