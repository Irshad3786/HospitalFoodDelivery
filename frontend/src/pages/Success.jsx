import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Success() {

    const successone = useRef()
    const successtwo = useRef()
    const successthree = useRef()


    useGSAP(()=>{
        gsap.from(successone.current,{
            delay:0.5,
            duration:2,
            opacity:0,
        })
    })

    useGSAP(()=>{
        gsap.from(successtwo.current,{
            delay:1,
            duration:2,
            opacity:0,
        })
    })


    useGSAP(()=>{
        gsap.from(successthree.current,{
            delay:1.5,
            duration:2,
            opacity:0,
        })
    })

  return (
    <div className='bg-[#00FFAA] w-[100%] h-screen flex justify-center items-center flex-col gap-5' >
        <div ref={successone}>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="159px" height="159px"><linearGradient id="IMoH7gpu5un5Dx2vID39Ra" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9dffce"/><stop offset="1" stop-color="#50d18d"/></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Ra)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><linearGradient id="IMoH7gpu5un5Dx2vID39Rb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stop-color="#135d36"/><stop offset=".931" stop-color="#125933"/><stop offset="1" stop-color="#11522f"/></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Rb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414 c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414 c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"/></svg>
        </div>

        <div ref={successtwo}>
            <h1 className='font-roboto text-xl'>Account Created Successfully </h1>
        </div>

        <div ref={successthree}>
            <button className='bg-white p-2 shadow-lg rounded-lg px-3 font-roboto hover:bg-gray-500'>Proceed to Login</button>
        </div>
    </div>
  )
}

export default Success