import React from 'react'

function Feature() {
  return (
    <div className='overflow-hidden w-full bg-green-600 my-8 p-10'>
        <p className='text-center cursor-default text-white font-semibold'>Featured in:</p>
        <div className='flex gap-3 justify-between items-center'>
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/public/images/zapier.svg" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/public/images/ebay.png" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/public/images/okra.svg" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/public/images/stripe.png" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/public/images/google.png" alt="" />
          <img className='w-24 hover:scale-125 duration-300  cursor-pointer' src="/public/images/docusign.svg" alt="" />
        </div>
    </div>
  )
}

export default Feature