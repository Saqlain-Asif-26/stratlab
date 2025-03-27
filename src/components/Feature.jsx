import React from 'react'

function Feature() {
  return (
    <div className='overflow-hidden w-full bg-green-600 my-8 p-10'>
        <p className='text-center cursor-default text-white font-semibold'>Featured in:</p>
        <div className='flex gap-3 justify-between items-center'>
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/images/zapier.svg" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/images/ebay.png" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/images/okra.svg" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/images/stripe.png" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/images/google.png" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/images/docusign.svg" alt="" />
        </div>
    </div>
  )
}

export default Feature