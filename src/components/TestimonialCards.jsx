import React from 'react'
import { IoStarSharp } from 'react-icons/io5';

function TestimonialCards() {
  return (
    <div className='grid grid-cols-3 gap-4 m-5 mt-12'>
        <div className='p-4 bg-white rounded-lg'>
            <div className='flex gap-x-2 items-center'>
                <div className='flex gap-x-1 text-yellow-500'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                </div>
                <p className='font-semibold'>5.0</p>
            </div>
            <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum nostrum, est vel voluptatum veritatis.</p>
            <p className='font-semibold'>Young Alaska, London</p>
        </div>
        <div className='p-4 bg-white rounded-lg'>
            <div className='flex gap-x-2 items-center'>
                <div className='flex gap-x-1 text-yellow-500'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                </div>
                <p className='font-semibold'>5.0</p>
            </div>
            <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ea vitae quos totam sapiente debitis!</p>
            <p className='font-semibold'>Fredric Simon, New Yark</p>
        </div>
        <div className='p-4 bg-white rounded-lg'>
            <div className='flex gap-x-2 items-center'>
                <div className='flex gap-x-1 text-yellow-500'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                </div>
                <p className='font-semibold'>5.0</p>
            </div>
            <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam quidem explicabo, porro optio necessitatibus?</p>
            <p className='font-semibold'>Lucas Tumhil, Bar Musa</p>
        </div>
        <div className='p-4 bg-white rounded-lg'>
            <div className='flex gap-x-2 items-center'>
                <div className='flex gap-x-1 text-yellow-500'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                </div>
                <p className='font-semibold'>5.0</p>
            </div>
            <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam quidem explicabo, porro optio necessitatibus?</p>
            <p className='font-semibold'>Lucas Tumhil, Bar Musa</p>
        </div>
        <div className='p-4 bg-white rounded-lg'>
            <div className='flex gap-x-2 items-center'>
                <div className='flex gap-x-1 text-yellow-500'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                </div>
                <p className='font-semibold'>5.0</p>
            </div>
            <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam quidem explicabo, porro optio necessitatibus?</p>
            <p className='font-semibold'>Lucas Tumhil, Bar Musa</p>
        </div>
    </div>
  )
}

export default TestimonialCards