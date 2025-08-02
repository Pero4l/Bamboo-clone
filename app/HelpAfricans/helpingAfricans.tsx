import React from 'react'
import Image from 'next/image'
import bell from '@/public/trigger-n-alerts.png'
import StartInvestingBtn from '../components/startInvestingBtn'

const HelpingAfricans = () => {
  return (
    <div className='lg:pt-32 pt-12 '>
      <div>
        <div className=' flex justify-center'>
        <h1 className='text-center lg:text-5xl px-10 lg:px-0 text-3xl text-gray-950 lg:w-[600px]  font-semibold'>We are helping Africans build actual wealth</h1>
        </div>
            
          <div className='flex justify-center'>
          <p className='text-center lg:text-2xl text-sm text-gray-800 lg:w-[650px] lg:pt-20 pt-10 px-7 lg:px-0'>Armed with the most robust data feeds
                 about the market, we alert our investors
                  with power triggers that ensure you 
                make money moves as the market moves.</p>
          </div>

                <div className='text-center lg:pt-20 pt-10'>
                    <h1 className='lg:text-6xl text-4xl font-bold text-[#07775d]'>500,000+</h1>
                    <p className='lg:text-4xl lg:pt-7 pt-4 lg:font-semibold '>Registered users</p>
                    </div>
      </div>


        <div className='flex lg:mx-96 flex-col lg:gap-28 lg:flex-row lg:pt-60 pt-10 '>
       <div className='lg:bg-white bg-[#fcf9f3] m-8 lg-m-o'>
       <Image src={bell} className='lg:w-[500px] lg:p-7 p-10' alt='Bell image' />
       </div>

        <div className='px-8'>
            <h1 className='lg:text-5xl px- lg:px-0 text-xl text-gray-950 lg:w-[450px]  font-semibold'>Triggers and alerts with AI driven market insights</h1>
            <p className='text-gray-800 lg:w-[340px] text-sm lg:text-[17px] lg:pt-16 pt-3'>Armed with the most robust data feeds about 
                the market, we alert our investors 
                with power triggers that ensure you make 
                money moves as the market moves.</p>

                <div className='lg:pt-10'>
                    <StartInvestingBtn/>
                </div>
        </div>
        </div>

    </div>
  )
}

export default HelpingAfricans
