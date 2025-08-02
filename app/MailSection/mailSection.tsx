import React from 'react'
import Image from 'next/image'
import mail from '@/public/mail-box.png'
import StartInvestingBtn from '../components/startInvestingBtn'

const MailSection = () => {
  return (
<div className='pt-14'>
<div className='bg-[#ddbd8e] lg:p-60 p-5 py-10 lg:py-32 lg:mt-20'>
       <div className=' rounded-md bg-white lg:p-20 p-10 pt-44 gap-20 flex lg:flex-row lg:items-center flex-col'>
      <div>
      <h1 className='lg:text-5xl px- lg:px-0 text-4xl text-center lg:text-start text-gray-950 lg:w-[450px]  font-semibold'>Join the conversation</h1>
            <p className='  text-center lg:text-start text-gray-800 lg:w-[370px] text-md lg:text-[17px] lg:pt-7 pt-7'>Our community has many gems. You can 
                learn from others, vote on upcoming features,
                 chat, and share your ideas. First time investors 
                 and experienced ones - all are welcome! you make 
                money moves as the market moves.</p>

                <div className=''>
                <button className='text-white font-medium hover:bg-[#36685b] bg-[#07775d]  lg:py-3 lg:px-7 px-5 py-2 lg:mt-7 mt-6 rounded-md'>Learn more</button>
                </div>
      </div>
      <div className='w-[300px] lg:w-[5000px] lg:-mb-0 -mb-10'>
      <Image src={mail} className='' alt='Mail box img' />
      </div>
       </div>
      
    </div>
</div>
  )
}

export default MailSection
