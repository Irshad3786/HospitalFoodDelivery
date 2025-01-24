import React from 'react'

function ManagerDashboard() {
  return (
    <div>
        <div className='bg-[#00FFAA] h-screen w-[100%] sm:h-screen '>
            <div className='md:flex md:justify-center md:items-center md:gap-8 sm:flex'>
                <div className='pt-6'><h1 className='font-outfit text-lg text-center font-semibold md:text-3xl md:p-6 '>Manager Dashboard</h1></div>
                <div className='flex p-2 justify-between items-center md:gap-5 '>
                    <div className='bg-white w-[48%]  rounded-lg flex justify-center items-center text-center '> 
                        <button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40 '>Add Patient <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h14q.825 0 1.413.588T19 5v5h-2V8H3v11h13v2z"/></svg></button>
                    </div>
                    <div className='bg-white w-[48%]  rounded-lg flex justify-center items-center text-center'>
                        <button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40'> Create Diet <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/><path fill="currentColor" d="M386.34 193.66L264.45 315.79A41.1 41.1 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.1 41.1 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65"/></svg>
                        </button>
                    </div>
                </div>

                <div className='flex p-2 justify-between items-center md:gap-5 '>
                    <div className='bg-white w-[48%] rounded-lg   flex justify-center items-center text-center'><button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40'>Pantry Box<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M10.67 13.02c-.22-.01-.44-.02-.67-.02c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.96 6.96 0 0 1-.59-6.98"/><circle cx="10" cy="8" r="4" fill="currentColor"/><path fill="currentColor" d="M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01l-1-1.73l-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49l-1 1.73l1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01l1 1.73l1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49l1-1.73l-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg></button></div>
                    <div className='bg-white w-[48%] rounded-lg   flex justify-center items-center text-center'><button className='font-roboto p-3 rounded-md flex justify-center items-center gap-3 text-sm font-semibold text-center md:w-40'>Track Meals <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21zm4.5-3q.2 0 .35-.15t.15-.35V14q.625 0 1.063-.437T12.5 12.5V10q0-.2-.15-.35T12 9.5t-.35.15t-.15.35v2.5H11V10q0-.2-.15-.35t-.35-.15t-.35.15T10 10v2.5h-.5V10q0-.2-.15-.35T9 9.5t-.35.15t-.15.35v2.5q0 .625.438 1.063T10 14v3.5q0 .2.15.35t.35.15m4 0q.2 0 .35-.15t.15-.35v-7.35q0-.275-.187-.462T14.35 9.5q-.675 0-1.012.625T13 11.5v2q0 .4.363.563T14 14.5v3q0 .2.15.35t.35.15"/></svg></button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagerDashboard