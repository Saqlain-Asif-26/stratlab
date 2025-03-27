import React from 'react'
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa';

function Pricing() {
  return (
    <div className='my-8 mx-28'>
      <div className='py-10 cursor-default'>
        <div className='mb-8'>
          <p className='px-5 font-bold text-green-600 text-sm border-l-4 border-green-600'>PRICING</p>
          <h1 className='font-bold text-4xl leading-[50px]'>Choose the pricing that <span className='block'>works best for you</span></h1>
        </div>
        <div className='flex justify-between items-center gap-4 lg:justify-evenly'>
          <div className='bg-gray-100 p-8 rounded-lg'>
            <h1 className='font-bold text-lg'>Monthly Subsription</h1>
            <p className='py-4 text-sm'>Fuel your product workflow with more advance research features</p>
            <h3 className='text-2xl font-semibold'>$49&nbsp;<p className='inline text-sm text-green-600'>/month</p></h3>
            <button className='rounded-full bg-green-600 my-5'><a className='flex items-center justify-between px-4 py-2 text-white text-lg font-semibold' href="#">Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></button>
            <div className='pt-2 text-sm flex flex-col gap-y-2'>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Money back gurantee</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Satisfaction Guranteed</p>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <FaRegCheckCircle className='text-green-600'/>
              <p>Or get your money back within 30 days</p>
            </div>
            </div>
          </div>
          <div className='relative bg-gray-100 p-8 rounded-lg'>
            <h1 className='font-bold text-lg'>One-Time Payment</h1>
            <p className='py-4 text-sm'>Scale product research and learning across your compony</p>
            <h3 className='text-2xl font-semibold'>$299&nbsp;<p className='inline text-sm text-green-600'>(save 20%)</p></h3>
            <button className='rounded-full bg-green-600 my-5'><a className='flex items-center justify-between px-4 py-2 text-white text-lg font-semibold' href="#">Enroll Now &nbsp;&nbsp; <FaAngleRight /></a></button>
            <div className='pt-2 text-sm flex flex-col gap-y-2'>
              <p className='font-semibold'>Everything in basic, and</p>
              <div className='flex justify-start items-center gap-x-4'>
                <FaRegCheckCircle className='text-green-600'/>
                <p>Scalable growth tools</p>
              </div>
              <div className='flex justify-start items-center gap-x-4'>
                <FaRegCheckCircle className='text-green-600'/>
                <p>Access to members only cummunity</p>
              </div>
            </div>
            <img className='absolute w-24 -top-7 -right-7' src="/stratlab/images/star.png" alt="star-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing