import React from 'react'
import HeroCard from './HeroCard';
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa';

function Hero() {
  return (
    <div className='my-8 mx-28'>
      <div className=' py-10 flex justify-between cursor-default'>
        <div className=''>
          <p className='px-5 font-bold text-green-600 text-sm border-l-4 border-green-600'>THE MARKITING TOOLKIT</p>
          <h1 className='font-bold text-5xl leading-[70px]'>Master Proving Strategies That Drive Real Result</h1>
          <p className='my-5 text-blue-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique magnam in eaque nihil perferendis similique magnam in eaque nihil aliquam aperiam inventore rem magni!</p>
          <button className='rounded-full bg-green-600'><a className='flex items-center justify-between px-4 py-2 text-white text-lg font-semibold' href="#">Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></button>
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
          <img className='w-[900px] hover:scale-125 duration-300' src="/images/Book.png" alt="Hero image" />
        </div>
      </div>
      <HeroCard />
    </div>
  )
}

export default Hero