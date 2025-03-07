import React, { useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom'
import dish from '../assets/dish.svg'

function Home() {
    const [menu , setmenu] = useState(false)
    const [menttwo , setmenutwo] = useState(false)

    const quote = useRef()
    const dishref = useRef()

    const Login =()=>{
        setmenu(!menu)
        setmenutwo(false)
    }

    const CreateAccount =()=>{
        setmenutwo(!menttwo)
        setmenu(false)
    }

    useGSAP(()=>{
        gsap.from(quote.current,{
            duration:2,
            delay:0.5,
            opacity: 0,
            onStart: () => {
                quote.current.style.pointerEvents = "none"; 
            },
            onComplete: () => {
                quote.current.style.pointerEvents = "auto"; 
            }
        })
    })

    useGSAP(()=>{
        gsap.to(dish.current,{
            rotate: 360,
            repeat: -1,
            duration: 9,
            ease: "linear",
            transformOrigin: "center center"
        })
    })




  return (
    <div className='w-[100%] h-screen'>
        <div className='w-[100%] h-20 bg-[#00FFAA] flex justify-center items-center gap-6 md:justify-start md:gap-[52%] sm:gap-[30%] '>
            <h1 className='font-Dangrek text-xl sm:text-3xl md:3xl md:pl-12'>NutriCare</h1>
            <div className='flex gap-2'>
                <button className='flex justify-center items-center bg-white p-1 rounded-sm font-Varela hover:bg-slate-400 md:p-3 sm:p-3 sm:rounded-lg md:rounded-lg cursor-pointer font-bold border border-black shadow-md' onClick={Login}>
                    Login <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>
                </button>

                <button className='flex justify-center items-center bg-white rounded-sm font-Varela hover:bg-slate-400 md:p-3 sm:p-3 sm:rounded-lg md:rounded-lg cursor-pointer font-bold border border-black shadow-md' onClick={CreateAccount}>
                    Create Account <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>
                </button>
            </div>
        </div>

        {menu && (<div className=' absolute w-[100%] h-[20%] flex justify-center pl-20 md:pl-[42%] sm:pl-[45%]'>
            <div className='flex flex-col w-64 h-[100%]'>
                <Link to="/ManagerLogin" className='border border-black p-2 hover:bg-[#00FFAA] cursor-pointer font-Varela'>Hospital Management login</Link>
                <Link to="/PantryLogin" className='border border-black p-2 hover:bg-[#00FFAA] cursor-pointer font-Varela'>Pantry Login</Link>
                <Link to="/DeliveryLogin" className='border border-black p-2 hover:bg-[#00FFAA] cursor-pointer font-Varela'>Delivery Login</Link>
            </div>
        </div>)}


        {menttwo &&(<div className='absolute w-[100%] h-[20%] flex justify-center pl-20 md:pl-[52%] sm:pl-[45%]'>
            <div className='flex flex-col w-56 h-[100%]'>
                <Link to="/CreateAccount" className='border border-black p-2 hover:bg-[#00FFAA] cursor-pointer font-Varela'>Hospital Management</Link>
                
            </div>
        </div>)}

        <div className='flex justify-center items-center w-[100%] h-[80%] pt-10 ' ref={quote}>
            
            <h1 className='font-outfit text-5xl text-center'>Fueling your recovery with wholesome meals, delivered with love.</h1>
        </div>

        <div className='flex justify-center items-center sm:items-start md:items-start flex-col space-y-20 sm:flex-row py-8 px-4 sm:gap-28 md:gap-48'>
            <div className='flex items-center justify-center' >
                <div className='w-44 sm:w-60 md:w-72 flex items-center '  >
                    <img src={dish} ref={dishref} />
                </div>
            </div>
            <div className='font-Varela font-bold gap-4 md:text-xl md:gap-8'>
                <h1>• Healing Meals, Delivered in No Time! </h1>
                <h1>• Fueling Recovery with Every Bite!</h1>
                <h1>• Nutritious, Delicious, and Full of Care!</h1>
                <h1>• More Than Just Food - It's Care in Every Bite!</h1>
            </div>
        </div>
    </div>
    
  )
}

export default Home