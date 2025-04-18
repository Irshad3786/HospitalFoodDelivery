import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

function DeliveryCard({Phonenumber}) {

    const [ChangeStatus , setChangeStatus] = useState(false)
    const [DeliveryData, setDeliverydata] = useState({ Orders: [{}] });
    const [Main , setMain] = useState(false)

    console.log(DeliveryData);
    
    

    
    

    useEffect(()=>{
        if(DeliveryData?.Orders[0]?._id){
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/CheckStatusDelivery`,{idData:DeliveryData?.Orders[0]?._id})
            .then((data)=>{
                
             if(data.data.data.Status == "Order accepted, out for delivery."){

                setChangeStatus(true)
             }
          
            })
            .catch((error)=>{
                console.log(error);
                })
            }

    },[DeliveryData])

    

    

    useEffect(()=>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/DeliveryData`,{PhoneNo:Phonenumber})
        .then((res)=>{
            setDeliverydata(res.data.data)
        })
        .catch((error)=>{
          console.log(error);
        })
    },[])


    


    useEffect(() => {
        const socket = io(import.meta.env.VITE_BACKEND_URL,{
            transports: ['websocket'], 
            withCredentials: true   
        });
    
        socket.on('OrderData', (data) => {
          console.log(data);
          
          setDeliverydata(data)
          
        });
      
        return () => {
          socket.off('OrderData');
        };
      }, []);

      const AcceptDelivery = ()=>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/ChangeDeliveryStatus`,{_id:DeliveryData?.Orders[0]?._id})
        .then((data)=>{
            if(data){ 
                setChangeStatus(true)
            }
        })
        .catch((error)=>{
          console.log(error);
        })}


        const DeliveryCompleted = ()=>{
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/OrderDelivered`,{_id:DeliveryData?.Orders[0]?._id , deliveryid:DeliveryData._id , Phone:Phonenumber})
            .then((data)=>{
                console.log(data);
                
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        

        useEffect(()=>{
            if(DeliveryData.Orders.length === 0){
                setMain(true)
                
            }
        }
            
        ,[DeliveryData.Orders])
      
      
    
  return (
    <>
    {!Main ? (<div className='bg-slate-400 w-[90%] h-fit p-4 rounded-3xl flex justify-center items-center font-roboto sm:w-[60%] md:w-[40%] shadow-2xl'>
        <ToastContainer/>
        <div  className='bg-slate-100 w-[90%] h-[100%] rounded-3xl drop-shadow-2xl flex pt-2  flex-col items-center'>
            <div className='bg-gray-900 h-fit rounded-2xl w-[90%] flex justify-center drop-shadow-xl  p-2 flex-col'>
                <div className="w-fit bg-[#00FFAA] px-4 py-1 rounded-2xl mx-auto">
                    <h1 className='text-black text-sm text-center font-semibold'>Food Item</h1>
                </div>
                <div className='flex justify-center items-center p-3'>
                    <p className='text-white text-base max-h-20 overflow-auto scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>{DeliveryData?.Orders[0]?.FoodItem}</p>
                </div>
            </div>

            <div className='p-6'>
            <h1 className='text-black text-sm  md:text-lg text-center font-semibold underline' >Patient Details</h1>
           </div>

       <div className='bg-white shadow-md  max-h-44 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>
            <table className='min-w-full table-auto border-collapse font-roboto text-[10px] sm:text-sm md:text-sm '>
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Name</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Phone No</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Floor No</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Room No</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Bed No</th>
                </tr>
            </thead>
            <tbody>
                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{DeliveryData?.Orders[0]?.Patient?.Name}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{DeliveryData?.Orders[0]?.Patient?.PhoneNo}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{DeliveryData?.Orders[0]?.Patient?.FloorNumber}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border ">{DeliveryData?.Orders[0]?.Patient?.RoomNumber
                            }</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border ">{DeliveryData?.Orders[0]?.Patient?.BedNumber}</td>
                        </tr>
            </tbody>
            </table>

        </div>


        <div className='p-6'>
            <h1 className='text-black text-sm  md:text-lg text-center font-semibold underline'>Pantry Details</h1>
        </div>

        <div className='bg-white shadow-md  max-h-44 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>
            <table className='min-w-full table-auto border-collapse font-roboto text-xs sm:text-base md:text-base '>
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Name</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Phone No</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Location</th>
                </tr>
            </thead>
            <tbody>
                        <tr  className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{DeliveryData?.Orders[0]?.Pantry?.Name}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{DeliveryData?.Orders[0]?.Pantry?.PhoneNo}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border ">{DeliveryData?.Orders[0]?.Pantry?.Location}</td>
                        </tr>
            </tbody>
            </table>

        </div>


        <div className='p-4' >
                {ChangeStatus ?<button className='bg-green-500 px-5 py-1 rounded-2xl font-outfit shadow-lg hover:bg-lime-400' onClick={DeliveryCompleted} >Delivery completed </button> :<button className='bg-red-500 px-5 py-1 rounded-2xl font-outfit shadow-lg hover:bg-lime-400' onClick={AcceptDelivery} >Accept Order</button>}
        </div>
            
        </div>
    </div>) : <div className='font-roboto flex justify-center items-center text-2xl h-96 w-[100%]'>
        <h1>No Orders Found</h1>
        </div>}
    </>
  )
}

export default DeliveryCard