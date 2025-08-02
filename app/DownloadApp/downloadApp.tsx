import React from 'react'
import Image from 'next/image'
import downloadImage from '@/public/download-app-image.png'
import apple from '@/public/new-removebg-preview.png'
import google from '@/public/google-play-6647242_1280.webp'

const DownloadApp = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center gap-7 lg:mx-60 '>
      <Image src={downloadImage} alt='Download App' className='lg:w-[700px]' />
      <div>
        <h1 className='lg:text-5xl font-bold text-gray-950 lg:w-[700px] text-center lg:text-start px-5'>Download the app and start your investing journey now.</h1>

        <div className='lg:w-[250px] w-[170px] flex flex-row mx-4 lg:flex-row pt-7 lg:pt-16'>
            <Image src={google} alt='Google Play Store' className='' />
            <Image src={apple} alt='Apple Store' className='w-[270px]' />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
