import React, { useState } from 'react'
import io from 'socket.io-client';
import { useEffect } from 'react';
import axios from 'axios';

function Orders({orders}) {


    const [view,setView]=useState(false)

    const [DeliveryData,setDeliveryData] = useState([])
    console.log(DeliveryData);
    

    useEffect(() => {
        const socket = io(import.meta.env.VITE_BACKEND_URL);
    
        socket.on('DeliveryCreated', (DeliveryData) => {
          setDeliveryData(DeliveryData)
        })
        return () => {
          socket.off('DeliveryCreated');
        };
      }, []);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/GetDelivery`)
        .then((res)=>{
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    

    const OrderAccept =()=>{
            setView(true)
    }
  return (
    <div className='bg-slate-400 w-[90%] h-fit p-4 rounded-3xl flex justify-center items-center font-roboto sm:w-[60%] md:w-[40%] shadow-2xl'>
        <div  className='bg-slate-100 w-[90%] h-fit rounded-3xl drop-shadow-2xl flex pt-2  flex-col items-center'>
            <div className='bg-gray-900 h-fit rounded-2xl w-[90%] flex justify-center drop-shadow-xl  p-2 flex-col'>
                <div className="w-fit bg-[#00FFAA] px-4 py-1 rounded-2xl mx-auto">
                    <h1 className='text-black text-sm text-center font-semibold'>Food Item</h1>
                </div>
                <div className='flex justify-center items-center p-3'>
                    <p className='text-white text-base max-h-20 overflow-auto scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>{orders.FoodItem}  {orders.Ingredients && `with ${orders.Ingredients}`}  {orders.SpecificFoodItem && `Other Items :  ${orders.SpecificFoodItem}`}</p>
                </div>
            </div>

           {view &&  (<div className='p-6'>
            <h1 className='text-black text-sm  md:text-lg text-center font-semibold' >Select Delivery</h1>
           </div>)}

            {view && (<div className='bg-white shadow-md  max-h-44 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>
            <table className='min-w-full table-auto border-collapse font-roboto text-xs sm:text-base md:text-base '>
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">NAME</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">PHONE NO</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">STATUS</th>
                </tr>
            </thead>
            <tbody>
                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>

                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>

                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>


                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>

                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>

                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>
                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">RAHUL</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">9963629056</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">AVAILABLE</td>
                        </tr>
            </tbody>
        </table>

        </div>)}

        {view && (<div className='p-4' >
                <button className='bg-green-500 px-5 py-3 rounded-2xl font-outfit shadow-lg hover:bg-lime-400'>Order Completed</button>
        </div>)}
        {!view && (<div className='p-4' >
                <button className='bg-green-500 px-5 py-1 rounded-2xl font-outfit shadow-lg hover:bg-lime-400' onClick={OrderAccept}>Accept Order</button>
        </div>)}
            
        </div>
    </div>
  )
}

export default Orders