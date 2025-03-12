import React from 'react'
import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function DeliveryLogin() {

    const [PhoneNo , setPhoneNo] = useState();
    const [Password , setPassword] = useState();
    const Navigate = useNavigate()


    const Submit =(e)=>{
        e.preventDefault();
  
        if(!PhoneNo || !Password){
        toast.warn("Fill in all fields.")
        }else{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/DeliveryLogin`,{PhoneNo,Password},{ withCredentials: true })
        .then((res)=>{

            if(res.data.message === "User Authenticated"){
            Navigate('/DeliveryDashboard', {state:PhoneNo})
            }
        })
        .catch((error)=>{
            console.log(error);
        })

        }

    }

  return (
    <div>
        <div className='bg-[#00FFAA] w-[100%] h-screen pt-28'>
      <ToastContainer/>
        <h1 className='text-center pt-16 text-xl font-Varela font-bold sm:text-2xl md:text-3xl'>Delivery Dashboard Login</h1>
        <Form onSubmit={Submit} >
            <div className='flex flex-col justify-center items-center gap-7 pt-28'>
                
              <input type="number" className='border border-black p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter PhoneNo' value={PhoneNo}
               onChange={(e)=>{setPhoneNo(e.target.value)}}/>

              <input type="password" className='border border-black p-3 rounded-lg shadow-lg placeholder:font-roboto placeholder:font-semibold w-[80%] sm:w-[50%] md:w-[30%]' placeholder='Enter Password ' 
                value={Password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
              
              <button className='p-2 bg-white rounded-lg shadow-xl px-3 font-Varela hover:bg-slate-500 flex justify-center items-center border border-black'>Login <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19l-1.72-1.72a.75.75 0 0 1 0-1.06" opacity="0.5"/><path fill="currentColor" d="M11.768 3.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v6.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-2.464c-.813 0-1.469 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47c-.043-.531-.043-1.187-.043-2V15a.75.75 0 0 1 1.5 0v.2c0 .852 0 1.447.038 1.91c.037.453.107.714.207.912c.216.423.56.767.984.983c.197.1.458.17.912.207c.462.037 1.056.038 1.909.038h2.4c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207a2.25 2.25 0 0 0 .983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.057.038-1.909V8.8c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038h-2.4c-.853 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909V9a.75.75 0 0 1-1.5 0v-.232c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043"/></svg></button>
            </div>
        </Form>
        
      </div>
    </div>
  )
}

export default DeliveryLogin