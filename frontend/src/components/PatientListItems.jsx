import React, { useState } from 'react'

function PatientListItems({data , search , onSelectPatient } ) {
    const [Datavisible , setDatavisible] = useState(false)
    const [PatientName , setPatientName] = useState('')
    const [PatientFloorNumber , setPatientFloorNumber] = useState('')
    const [PatientRoomNumber , setPatientRoomNumber] = useState('')
    const [PatientBedNumber , setPatientBedNumber] = useState('')


    const SubmitingData = (val)=>{
        setDatavisible(true)
        setPatientName(val.Name)
        setPatientFloorNumber(val.FloorNumber)
        setPatientRoomNumber(val.RoomNumber)
        setPatientBedNumber(val.BedNumber)
        onSelectPatient(val)
    }
    

    
    
  return (
    <div>
        <div className='bg-white shadow-md  max-h-44 overflow-y-scroll '>
        <table className='min-w-full table-auto border-collapse font-roboto text-xs sm:text-base md:text-base'>
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Name</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Floor No</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Room No</th>
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">Bed No</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.filter((data)=>data.Name.toLowerCase().includes(search)).map((val,index)=>(
                        <tr key={index} className="hover:bg-gray-300 cursor-pointer" onClick={()=>{SubmitingData(val)
                        }} >
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.Name}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.FloorNumber}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.RoomNumber}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.BedNumber}</td>
                        </tr>))}
            </tbody>
        </table>
        </div>

        {Datavisible && (<div className=' w-[100%] h-fit flex justify-center items-center pt-3 '>

            <table className='bg-green-100 font-roboto text-xs sm:text-base md:text-base'>
                <thead>
                    <tr>
                    <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>Name</th>
                    <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>Floor No</th>
                    <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>Room No</th>
                    <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>Bed No</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{PatientName}</td>
                    <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{PatientFloorNumber}</td>
                    <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{PatientRoomNumber}</td>
                    <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{PatientBedNumber}</td>
                </tr>
                </tbody>
            </table>
        </div>)}
    </div>
  )
}

export default PatientListItems;
