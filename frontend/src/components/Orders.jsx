import React, { useState } from 'react'
import io from 'socket.io-client';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Orders({orders}) {


    
    const [OrderCompleted , setOrderCompleted] = useState(false)
    const [view,setView]=useState(false)
    const [viewTwo,setViewTwo]=useState(false)
    const [Delivery,setDelivery] = useState([])
    const [DeliveryData,setDeliveryData] = useState([])



    useEffect(() => {
        const socket = io(import.meta.env.VITE_BACKEND_URL,{
            transports: ['websocket'], 
            withCredentials: true   
        });
    
        socket.on('DeliveryCreated', (DeliveryData) => {
          setDeliveryData(DeliveryData)
        })
        return () => {
          socket.off('DeliveryCreated');
          socket.disconnect();
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
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/ChangeStatus`,{_id:orders._id})
        .then((res)=>{
            
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const FinalSubmit = ()=>{

        if(Delivery.length==0){
            toast.info('Add a Delivery')
        }else{
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/AddOrders`,{Delivery,orders})
            .then((res)=>{
                if(res){
                    setOrderCompleted(true)
                }
            
            })
            .catch((error)=>{
                console.log(error);
            })

            
           
        }


        
        
        
    }


    useEffect(() => {
        if (orders.Status === "Order Accepted" || orders.Status === "Yet to Deliver" ) {
            setView(true);
        }
    }, [orders.Status]); 


    useEffect(() => {

        if (orders.Status === "Yet to Deliver" ) {
            setOrderCompleted(true)
        }

    }, [orders.Status]); 



  return (
    <div className='bg-slate-400 w-[90%] h-fit p-4 rounded-3xl flex justify-center items-center font-roboto sm:w-[60%] md:w-[40%] shadow-2xl'>
        <ToastContainer/>
        <div  className='bg-slate-100 w-[90%] h-fit rounded-3xl drop-shadow-2xl flex pt-2  flex-col items-center'>
            <div className='bg-gray-900 h-fit rounded-2xl w-[90%] flex justify-center drop-shadow-xl  p-2 flex-col'>
                <div className="w-fit bg-[#00FFAA] px-4 py-1 rounded-2xl mx-auto">
                    <h1 className='text-black text-sm text-center font-semibold'>Food Item</h1>
                </div>
                <div className='flex justify-center items-center p-3'>
                <p className='text-white text-base max-h-20 overflow-auto scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>
                    {orders.FoodItem}{' '}
                    {orders.Ingredients && (
                        <span className="text-orange-300 font-Varela">Ingredients: {orders.Ingredients}</span>
                    )}{' '}
                    {orders.SpecificFoodItem && (
                        <span className="text-green-300 font-Varela">Other Items: {orders.SpecificFoodItem}</span>
                    )}
                    </p>

                </div>
            </div>

           {!OrderCompleted && view &&  (<div className='p-6'>
            <h1 className='text-black text-sm  md:text-lg text-center font-semibold underline' >Select Delivery</h1>
           </div>)}

            {!OrderCompleted && view && (<div className='bg-white shadow-md  max-h-44 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#00FFAA] scrollbar-track-transparent'>
            <table className='min-w-full table-auto border-collapse font-roboto text-xs sm:text-base md:text-base '>
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">NAME</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">PHONE NO</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">STATUS</th>
                </tr>
            </thead>
            <tbody>

                {
                    DeliveryData.filter((data)=>data.Status === "Available").map((data,indexval)=>(
                        <tr  className="hover:bg-gray-300 cursor-pointer" index ={indexval} onClick={()=>{setDelivery(data),setViewTwo(true)}}>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{data.Name}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{data.PhoneNo}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border text-lime-600">{data.Status}</td>
                        </tr>
                    ))
                }

                


                        
            </tbody>
        </table>

        </div>)}

        {!OrderCompleted && view && viewTwo &&(<div className='p-6'>
            <h1 className='text-black text-sm  md:text-lg text-center font-semibold underline' >Selected Delivery</h1>
        </div>)}



        {!OrderCompleted && view && viewTwo &&(<div className=' w-[100%] h-fit flex justify-center items-center pt-3 '>

        <table className='bg-green-100 font-roboto text-xs sm:text-base md:text-base'>
            <thead>
                <tr>
                <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>Name</th>
                <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>PhoneNo</th>
                
                </tr>
            </thead>
            <tbody>
            <tr>
                <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{Delivery.Name}</td>
                <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{Delivery.PhoneNo}</td>
               
            </tr>
            </tbody>
        </table>
        </div>)}



        {view && (<div className='p-4' >
                {OrderCompleted ?<h1 className='bg-amber-400 px-5 py-3  font-outfit shadow-lg ' >Order yet to deliver</h1>:<button className='bg-green-500 px-5 py-3 rounded-2xl font-outfit shadow-lg hover:bg-lime-400' onClick={FinalSubmit}>Order Completed</button>}
        </div>)}
        {!view && (<div className='p-4' >
                <button className='bg-green-500 px-5 py-1 rounded-2xl font-outfit shadow-lg hover:bg-lime-400' onClick={OrderAccept}>Accept Order</button>
        </div>)}
            
        </div>
    </div>
  )
}

export default Orders