import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

function Banner2() {
  return (
    <div className='w-full px-24 py-16 flex justify-between items-center bg-green-700 text-white cursor-default'>
        <h1 className='leading-[70px] text-5xl'>Ready to supercharge your marketing skills?</h1>
        <div>
            <p className='text-sm mb-8'>Our open, positive and proactive aproach helps us find ways to align your work.</p>
            <button className='rounded-full px-4 py-2 bg-white font-semibold text-green-600'><a className='flex items-center' href="#">Get started now &nbsp; &nbsp; <FaAngleRight /></a></button>
        </div>
    </div>
  )
}

export default Banner2