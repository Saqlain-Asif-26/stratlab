import React from 'react'

const Hero2cards = () => {
  return (
    <div className='flex gap-4 my-10'>
        <div className='w-64 bg-gray-100 rounded-lg p-4'>
            <h4 className='font-bold'>Premium Resources</h4>
            <p className='my-4'>Lorem ipsum, dolor sit cupiditate reiciendis molestias vitae. Magni, suscipit.</p>
            <a className='text-blue-700 underline font-semibold' href="#">Download Resources</a>
        </div>
        <div className='w-64 bg-gray-100 rounded-lg p-4'>
            <h4 className='font-bold'>Training Materials Included</h4>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, iste?</p>
            <a className='text-blue-700 underline font-semibold' href="#">Download Materials</a>
        </div>
    </div>
  )
}

export default Hero2cards