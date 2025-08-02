import React from 'react'
import Image from 'next/image'
import art from '@/public/artboard.png'
const HeroFraction = () => {
  return (
    <div className='bg-[#07775d] flex lg:flex-row flex-col lg:justify-between mx-4 lg:mx-60 mt-10'>

      <div className='text-white p-3 py-4 lg:p-32'>
        <h1 className='text-4xl font-semibold'>Invest in fractions</h1>
        <p className='lg:w-[490px] text-xl pt-12 lg:leading-9'>Our fractional investing technology 
            allows you to invest as much or as
             little as you want in your favorite
              public listed US company, a bundle
               of companies called an ETF, other 
               African companies, mutual funds, 
               or fixed income products from around 
               the world.</p>

               <div>
               <button className='text-[#07775d] hover:bg-[#d4ece6] font-medium  bg-white py-2 px-11 lg:mt-28 mt-12 mb-3  rounded-md'>Start Investing</button>
               </div>
      </div>

        <div>
            <Image src={art} alt='artboard' className='lg:w-[700px] h-full pb-1 '/>
        </div>
    </div>
  )
}

export default HeroFraction
