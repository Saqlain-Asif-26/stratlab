import React from 'react'
import Hero2cards from './Hero2cards';
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa';

function Hero2() {
  return (
    <div className='my-8 mx-28'>
      <div className=' pt-10 flex justify-between cursor-default'>
        <div className=''>
          <img className=' w-[900px] hover:scale-125 duration-300' src="/public/images/hero2.png" alt="Hero2 image" />
        </div>
        <div className=''>
          <p className='px-5 font-bold text-green-600 text-sm border-l-4 border-green-600'>ABOUT THE COURSE</p>
          <h1 className='font-bold text-5xl leading-[70px]'>Journey Into Marketing <span className='block'>Mastery: Unvieling The Marketing Toolkit</span></h1>
          <p className='my-5 text-blue-700'>Lorem ipsum similique magnam in eaque nihil perferendis similique magnam in eaque nihil aliquam aperiam inventore rem magni!</p>
          <button className='rounded-full bg-green-600'><a className='flex items-center justify-between px-4 py-2 text-white text-lg font-semibold' href="#">Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></button>
          {/* <Hero2cards className="hidden border-red-500 border xl:block"/> */}
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
        {/* <Hero2cards className="block border-green-500 border xl:hidden"/> */}
    </div>
  </div>
  )
}

export default Hero2