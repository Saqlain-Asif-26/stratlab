import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

function Summery() {
  return (
    <div className='my-8 mx-28'>
      <div className='py-10 cursor-default'>
        <div className='mb-8'>
          <p className='px-5 font-bold text-green-600 text-sm border-l-4 border-green-600'>COURSE SUMMERY</p>
          <h1 className='font-bold text-4xl leading-[50px]'>Navigating The Marketing Landscape: <span className='block'>Your Roadmap To Success</span></h1>
        </div>
        <div className='flex gap-2'>
          <div className='flex justify-between h-80 bg-emerald-900 text-white rounded-lg'>
            <div className='flex flex-col justify-between font-semibold text-sm p-8'>
              <p className=''>01</p>
              <h5 className='transform rotate-180' style={{writingMode: 'vertical-lr'}}>Fundamentals of Marketing</h5>
            </div>
            <div className='self-center'>
              <div className='flex px-8 my-8 border-l-2 border-emerald-800'>
                <div className='p-2 flex flex-col justify-between'>
                  <div>
                    <h1 className='text-xl font-semibold'>Fundanmentals of Marketing</h1>
                    <p className='text-sm my-4 leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente expedita sint qui dignissimos, dicta repellat.</p>
                  </div>
                  {/* <button className='bg-green-600 text-white text-lg font-semibold px-4 py-2 rounded-full'><a className='flex items-center' href="#">Next &nbsp;&nbsp; <FaAngleRight /></a></button> */}
                  <div><a href='#' className='px-4 py-2 rounded-full cursor-pointer bg-green-600 text-white font-semibold text-lg inline-flex items-center'>Next &nbsp;&nbsp; <FaAngleRight /></a></div>
                </div>
                <div className='overflow-hidden rounded-lg'>
                  <img className='w-60 hover:scale-125 duration-300' src="/public/images/laptop.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='h-80 flex flex-col justify-between font-semibold text-green-600 w-auto bg-gray-200 rounded-lg p-8 text-sm'>
            <p className=''>02</p>
            <h5 className='transform rotate-180' style={{writingMode: 'vertical-lr'}}>Digital Marketing Essantials</h5>
          </div>
          <div className='h-80 flex flex-col justify-between font-semibold text-green-600 bg-gray-200 rounded-lg p-8 text-sm'>
            <p className=''>03</p>
            <h5 className='transform rotate-180' style={{writingMode: 'vertical-lr'}}>Data Analyics</h5>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Summery