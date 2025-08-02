import React from 'react'
import Image from 'next/image'
import img from '@/public/logo.png'
import { IoMenu } from "react-icons/io5";

const navPage = () => {
  return (
    <div>
        <nav className='flex justify-between items-center p-5 lg:px-60 bg-white '>
            <div>
                <Image src={img} alt="Logo" />
            </div>

            <div>
                <ul className='hidden lg:flex gap-14 text-gray-500 font-medium  '>
                    <li className='cursor-pointer hover:scale-100'>Products</li>
                    <li className='cursor-pointer hover:scale-100'>Learn</li>
                    <li className='cursor-pointer hover:scale-100'>Community</li>
                    <li className='cursor-pointer hover:scale-100'>FAQ</li>
                </ul>
            </div>

            <div>
                <button className='bg-green-500 hidden hover:scale-100 text-white font-semibold rounded-md  py-2 lg:flex px-3'>Get Started</button>
            </div>

            <IoMenu className='text-2xl lg:hidden'/>
        </nav>
    </div>
  )
}

export default navPage
