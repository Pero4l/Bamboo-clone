import React from 'react'
import Image from 'next/image'
import stone from '@/public/shapes-diagram.png'
import Btn from '../components/startInvestingBtn'

const SharpHero = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-34 lg:mx-60'>
      <Image src={stone} alt='shapes' className='p-8 px-12 lg:p-0 lg:px-o' />

      <div className='px-5 lg:px-5'>
        <h1 className='lg:text-5xl text-xl lg:leading-14 font-semibold lg:w-[450px] text-gray-900'>Learn the basics of investing: From the ground up</h1>
        <p className='lg:w-[500px]  pt-6 text-gray-800'>We teach you the basics and get you started on your investment journey in no time.</p>
        <Btn/>
      </div>
    </div>
  )
}

export default SharpHero
