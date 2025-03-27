import React from 'react'
import { FaTimes } from 'react-icons/fa';

function Notification() {
  return (
    <div className='bg-emerald-900 w-full px-6 py-2 text-center text-white flex items-center justify-between'>
        <div></div>
        <p className='cursor-default'>Open your account here to cashback up to 10%, <a href="#" className='underline text-blue-700 font-semibold'>Learn More</a>.</p>
        <FaTimes className="cursor-pointer hover:text-red-500 duration-300" />
    </div>
  )
}

export default Notification