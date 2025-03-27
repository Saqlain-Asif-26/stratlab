import React from 'react'
import TestimonialCards from './TestimonialCards'

function Testimonials() {
  return (
    <div className='bg-gray-100 py-10'>
      <div className='my-8 mx-28 cursor-default'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='px-5 font-bold text-green-600 text-sm border-l-4 border-green-600'>TESTIMONIALS</p>
          <h1 className='font-bold text-4xl leading-[70px]'>What they say about us</h1>
        </div>
        <p className='text-sm max-w-96'>Our open, positive and proactive aproach helps us find ways to align your work enviroment with culture and attitude you and your team aspire.</p>
        </div>
        <TestimonialCards />
      </div>
    </div>
  )
}

export default Testimonials