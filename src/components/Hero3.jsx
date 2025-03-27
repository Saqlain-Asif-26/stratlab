import React from 'react'
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa';

function Hero3() {
  return (
    <div className='my-8 mx-28'>
      <div className=' py-10 flex justify-center cursor-default'>
        <div className=''>
          <p className='px-5 font-bold text-green-600 text-sm border-l-4 border-green-600'>WHAT YOU'LL LEARN</p>
          <h1 className='font-bold text-4xl leading-[70px]'>Empower Your Skills: <span>Unvieling the Proficiencies You'll Master</span></h1>
          <p className='my-5 text-blue-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique magnam in eaque nihil perferendis similique magnam in eaque nihil aliquam aperiam inventore rem magni!</p>
          <button className='rounded-full bg-green-600'><a className='flex items-center justify-between px-4 py-2 text-white text-lg font-semibold' href="#">Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></button>
          <div className='my-6 flex flex-col gap-y-2'>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Money back guarantee</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Scalable growth tools dum dum</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Access to members-only cummunity chin tapak</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Access to aha tamater members-only cummunity</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Access to bady mazydar members-only cummunity</p>
            </div>
        </div>
        </div>
        <div className=''>
          <img className=' w-[900px] z-30 hover:scale-125 duration-300' src="/public/images/Book.png" alt="Hero image" />
        </div>
      </div>
    </div>
  )
}

export default Hero3