import React from 'react'
import Image from 'next/image'
import img from '@/public/logo.png'

const navPage = () => {
  return (
    <div>
        <nav className='flex justify-between items-center p-5 px-60 bg-white '>
            <div>
                <Image src={img} alt="Logo" />
            </div>

            <div>
                <ul className='flex gap-10 text-gray-500 font-medium '>
                    <li>Products</li>
                    <li>Learn</li>
                    <li>Community</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div>
                <button className='bg-green-500 text-white font-semibold rounded-md  py-2 px-3'>Get Started</button>
            </div>
        </nav>
    </div>
  )
}

export default navPage
