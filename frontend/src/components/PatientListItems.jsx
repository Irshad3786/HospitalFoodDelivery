import React from 'react'

function PatientListItems({data}) {
    
    
  return (
    <div className='bg-white shadow-md rounded-lg max-h-44 overflow-y-scroll'>
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
                    data.map((val,index)=>(
                        <tr key={index} className="hover:bg-gray-300 cursor-pointer">
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.Name}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.FloorNumber}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.RoomNumber}</td>
                            <td className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border">{val.BedNumber}</td>
                        </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default PatientListItems;
