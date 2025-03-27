import React from 'react'
import { FaLinkedin, FaInstagram,  FaYoutube, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-emerald-950 text-white px-20 py-16 cursor-default'>
        <div className='flex justify-between'>
            <div>
            <p className='text-sm max-w-96'>Our open, positive and proactive aproach helps us find ways to align your work enviroment with culture and attitude you and your team aspire.</p>
                <div className='mt-8 flex justify-between items-center gap-4 max-w-64'>
                    <p>Follow us on:</p>
                    <FaLinkedin className='cursor-pointer hover:text-green-600 hover:scale-125 duration-300'/>
                    <FaInstagram className='cursor-pointer hover:text-green-600 hover:scale-125 duration-300'/>
                    <FaYoutube className='cursor-pointer hover:text-green-600 hover:scale-125 duration-300'/>
                    <FaFacebookF className='cursor-pointer hover:text-green-600 hover:scale-125 duration-300'/>
                </div>
            </div>
            <ul className='grid grid-cols-3 gap-x-16'>
                <li><a className='hover:text-green-600 duration-300' href="#">Home</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">Services</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">Testimonial</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">Why Us</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">Case Studies</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">About</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">Deals</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">Plan</a></li>
                <li><a className='hover:text-green-600 duration-300' href="#">FAQ</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer