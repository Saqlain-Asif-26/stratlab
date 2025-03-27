import React from 'react'

function Navbar() {
  return (
    <div className='max-w-11/12 mx-10 mt-8 rounded-2xl px-10 py-4 border-t-2 border-gray-100 shadow-gray-400 shadow-lg flex justify-between items-center'>
      <h1 className='font-bold tracking-wider text-2xl cursor-pointer'><a href="#">STRATLAB</a></h1>
      <div>
        <ul className='flex font-semibold gap-x-4'>
          <li className='duration-300 hover:text-green-600 hover:font-bold'><a href="#">Service</a></li>
          <li className='duration-300 hover:text-green-600 hover:font-bold'><a href="#">Why Us</a></li>
          <li className='duration-300 hover:text-green-600 hover:font-bold'><a href="#">Testimonial</a></li>
          <li className='duration-300 hover:text-green-600 hover:font-bold'><a href="#">FAQ</a></li>
          <li className='duration-300 hover:text-green-600 hover:font-bold'><a href="#">About</a></li>
        </ul>
      </div>
      <div>
        <button className='mx-2 border-2 border-gray-100 duration-300 hover:border-green-600 px-4 py-2 rounded-full font-semibold hover:text-green-600'><a href="#">Login</a></button>
        <button className='border-2 border-green-600 px-4 py-2 rounded-full font-semibold text-white duration-300 bg-green-600'><a href="#">Sign Up</a></button>
      </div>
    </div>
  )
}

export default Navbar