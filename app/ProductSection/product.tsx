'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import stock from '@/public/stocks.png'
import etfs from '@/public/etfs.png'
import clock from '@/public/clock.png'
import building from '@/public/institutions.png'

const Product = () => {
    // const [products, setProducts] = useState('')
  return (
    <div className='bg-[#07775d] lg:pt-32 pt-24'>
      <h1 className='text-center text-white lg:text-5xl text-3xl font-semibold'>Our Products</h1>

      <div className='flex flex-col lg:flex-row gap-7 lg:gap-0 lg:mx-[230px]   py-16'>
        <div className='lg:w-[350px] mx-5'>
            <Image src={stock} alt='Stock img' className='bg-[#c4cae4] lg:p-20 p-14 py-16 lg:py-22 rounded-t-md' />

            <div className=' bg-white rounded-b-md p-10'>
                <h2 className='text-gray-900 text-xl font-semibold'>Stocks</h2>
                <p className='text-gray-800 lg:w-[260px] pt-5 '>Discover the best global
                     and local stocks to invest
                      in. Get unrestricted access
                       to the U.S. and Nigerian 
                       stock markets, right from 
                       your mobile phone or computer.</p>

                       <div>
        <button className='text-white font-medium hover:bg-[#36685b] bg-[#07775d] lg:py-3 lg:px-7 px-3 py-1 lg:mt-27 mt-6 rounded-md'>Learn more</button>
    </div>
            </div>
        </div>

        {/* 2 */}

        <div className='lg:w-[350px] mx-5'>
            <Image src={etfs} alt='Stock img' className='bg-[#f2f2f2] lg:p-20 p-14 py-16 lg:py-24 rounded-t-md' />

            <div className=' bg-white rounded-b-md p-10'>
                <h2 className='text-gray-900 text-xl font-semibold'>Exchange Traded Funds (ETFs)</h2>
                <p className='text-gray-800 lg:w-[260px] pt-5'>Want to quickly diversify your portfolio? 
                    Unsure what stocks to buy? Want to follow
                     an index like the S&P 500 that tracks the
                      US economy? Want to get professional money 
                      management for a low price? We have got you 
                      covered.</p>

                       <div>
        <button className='text-white font-medium hover:bg-[#36685b] bg-[#07775d]  lg:py-3 lg:px-7 px-3 py-1 lg:mt-7 mt-6 rounded-md'>Learn more</button>
    </div>
            </div>
        </div>

        {/* 3 */}

        <div className='lg:w-[350px] mx-5'>
            <Image src={clock} alt='Stock img' className='bg-[#e99b8d] lg:p-20 p-14 py-16 lg:py-24 rounded-t-md' />

            <div className=' bg-white rounded-b-md p-10'>
                <h2 className='text-gray-900 text-xl font-semibold'>Fixed Returns</h2>
                <p className='text-gray-800 lg:w-[260px] pt-5'>Bamboo Fixed Returns is for you. It is 
                    a fixed-income dollar-denominated
                     investment that gives you up to 8%
                      annual returns. It allows you to 
                      invest your extra cash and diversify 
                      your overall portfolio.</p>

                       <div>
        <button className='text-white font-medium hover:bg-[#36685b] bg-[#07775d]  lg:py-3 lg:px-7 px-3 py-1 lg:mt-20 mt-6 rounded-md'>Learn more</button>
    </div>
            </div>
        </div>

        {/* 4 */}

        <div className='lg:w-[350px] mx-5'>
            <Image src={building} alt='Stock img' className='bg-[#bac5e8] lg:p-20 p-14 py-16 lg:py-24 rounded-t-md' />

            <div className=' bg-white rounded-b-md p-10'>
                <h2 className='text-gray-900 text-xl font-semibold'>For Institutions</h2>
                <p className='text-gray-800 lg:w-[260px] pt-5'>Build or integrate your application with our suite 
                    of products or use our trading tool for
                     managers and brokers. Give your clients
                      more access to buy stocks, ETFs, seamlessly
                       manage portfolios, access research and powerful
                        reports.</p>

                       <div>
        <button className='text-white  font-medium hover:bg-[#36685b] bg-[#07775d]  lg:py-3 lg:px-7 px-3 py-1 lg:mt-9 mt-6 rounded-md'>Learn more</button>
    </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Product
