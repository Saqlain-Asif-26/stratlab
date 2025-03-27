import React from 'react'
import { IoStarSharp } from 'react-icons/io5';

function HeroCard() {
  return (
    <div className='cursor-default'>
        <p className='font-bold'>What they say about us</p>
        <div className='flex gap-x-4 my-5'>
            <div className='p-4 bg-gray-100 rounded-lg'>
                <div className='flex gap-x-2 items-center'>
                    <div className='flex gap-x-1 text-yellow-500'>
                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                    </div>
                    <p className='font-semibold'>5.0</p>
                </div>
                <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum nostrum, est vel voluptatum veritatis.</p>
                <p className='font-semibold'>Young Alaska, London</p>
            </div>
            <div className='p-4 bg-gray-100 rounded-lg'>
                <div className='flex gap-x-2 items-center'>
                    <div className='flex gap-x-1 text-yellow-500'>
                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                    </div>
                    <p className='font-semibold'>5.0</p>
                </div>
                <p className='text-md my-4 text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ea vitae quos totam sapiente debitis!</p>
                <p className='font-semibold'>Fredric Simon, New Yark</p>
            </div>
            <div className='p-4 bg-gray-100 rounded-lg'>
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
    </div>
  )
}

export default HeroCard