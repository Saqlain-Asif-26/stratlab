import React from 'react'
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa';

function LastHero() {
  return (
    <div className='bg-emerald-900'>
        <div className='mt-8 mx-28'>
      <div className=' py-10 flex justify-center cursor-default'>
        <div className='text-white flex flex-col justify-center'>
          <h1 className='font-bold text-5xl leading-[70px]'>Master Proving Strategies That Drive Real Result</h1>
          <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique magnam in eaque nihil perferendis similique magnam in eaque nihil aliquam aperiam inventore rem magni!</p>
          {/* <button className='rounded-full bg-green-600'><a className='flex items-center justify-between px-4 py-2 text-white text-lg font-semibold' href="#">Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></button> */}
          <div><a href='#' className='px-4 py-2 rounded-full cursor-pointer bg-green-600 text-white font-semibold text-lg inline-flex items-center'>Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></div>
          <div className='my-6 flex gap-x-6 gap-y-3 flex-wrap'>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Money back guarantee</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Scalable growth tools</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Access to members-only cummunity</p>
            </div>
        </div>
        </div>
        <div className=''>
          <img className=' w-[900px] z-30 hover:scale-125 duration-300' src="/public/images/Book.png" alt="Hero image" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default LastHero