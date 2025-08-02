'use client'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import img from '@/public/logo.png'
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const navPage = () => {
    const[isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(!isClick);
    }
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

            < span onClick={handleClick} className='text-2xl lg:hidden'>{isClick ? < MdClose/> : <IoMenu/>}</span>
        </nav>

        <div>
                <ul className={isClick ? ' lg:hidden pt-5 flex flex-col gap-7 text-center text-gray-500 font-medium' : "hidden"}>
                    <li className='cursor-pointer hover:scale-100'>Products</li>
                    <li className='cursor-pointer hover:scale-100'>Learn</li>
                    <li className='cursor-pointer hover:scale-100'>Community</li>
                    <li className='cursor-pointer hover:scale-100'>FAQ</li>
                    <div>
                    <button className='bg-green-500 lg:hidden hover:scale-100 text-white text-sm font-semibold rounded-md  py-2 text-center px-28 mt-5'>Get Started</button>
                    </div>
                </ul>
            </div>
    </div>
  )
}

export default navPage
