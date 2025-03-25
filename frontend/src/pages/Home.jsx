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
    const deliveryref = useRef()

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
        gsap.to(dishref.current,{
            rotate: 360,
            repeat: -1,
            duration: 9,
            ease: "linear",
            transformOrigin: "center center"
        })
    })




  return (
    <div className='w-[100%] h-screen'>
        <div className='w-[100%] h-20 bg-[#00FFAA] flex justify-center items-center gap-6 md:justify-start md:gap-[52%] sm:gap-[30%] shadow-2xl'>
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
            
            <h1 className='font-outfit text-5xl text-center'>Fueling your recovery with wholesome meals, delivered with love ❤</h1>
        </div>

        <div className='flex justify-center items-center sm:items-start md:items-start flex-col space-y-20 sm:flex-row py-8 px-4 sm:gap-28 md:gap-48'>
            <div className='flex items-center justify-center' >
                <div className='w-44 sm:w-60 md:w-72 flex items-center '  >
                    <img src={dish} ref={dishref} />
                </div>
            </div>
            <div className='font-Playwrite font-bold gap-4 md:text-2xl md:gap-8 '>
                
                <h1 >More Than Just Food - It's Care in Every Bite!</h1>
            </div>
        </div>

        <div className='flex space-x-2 justify-center items-center px-10 sm:justify-end md:justify-end'>
            <div>
                <input type="text"  className='bg-black px-4 1 rounded-2xl py-1 sm:px-6 sm:py-3 sm:rounded-3xl md:px-6 md:py-3 md:rounded-3xl  text-white font-Varela md:w-72' placeholder='Enter Your Email'/>
            </div>
            <div>
                <button className='bg-[#00FFAA] px-3 rounded-2xl py-1 font-Varela sm:px-5 sm:py-3 sm:rounded-3xl'>Subscribe</button>
            </div>
        </div>
        <div className='flex flex-col items-center p-4 sm:flex-row sm:justify-center sm:gap-64 sm:pt-10 md:pt-20'>
            <div className='flex flex-col gap-3 '>
                <div>
                   <h1 className='flex gap-2 font-Playwrite text-3xl font-semibold sm:text-5xl md:text-6xl'>X<h1 className='font-Varela font-normal text text-[#00FFAA] sm:text-5xl md:text-6xl'>Hospitals</h1></h1>
                   <h1 className='font-Varela sm:text-xl'>a place where healing start</h1>
                </div>
                <div>
                    <h1 className='font-Dangrek text-4xl sm:text-5xl md:text-6xl'>NutriCare</h1>
                </div>
            </div>
            <div className="text-xl font-Varela p-6 flex flex-col sm:flex-row sm:flex-wrap sm:gap-20 md:text-2xl ">
                <div >
                    <h1>Home</h1>
                    <h1>Menu</h1>
                    <h1>Contact</h1>
                    <h1>FAQs</h1>
                </div>
                <div className="sm:text-right">
                    <h1>About Us</h1>
                    <h1>Help Center</h1>
                    <h1>Terms & Conditions</h1>
                    <h1>Privacy Policy</h1>
                </div>
            </div>
        </div>

        <div className='w-[100%] h-10 sm:h-14 md:h-15 bg-[#00FFAA] flex items-center justify-between px-2'>
            <div>
                <h1 className='text-[10px] sm:text-[15px] md:text-[18px]'> © 2025 NutriCare. All Rights Reserved.</h1>
            </div>
            <div className='flex gap-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24"><path fill="#050505" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24"><path fill="#050505" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24"><path fill="#050505" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24"><g fill="none" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#050505"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/><path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/></g></svg>
            </div>
        </div>
    </div>
    
  )
}

export default Home