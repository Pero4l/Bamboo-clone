import React from 'react'
import Image from 'next/image'
import downloadImage from '@/public/download-app-image.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ImAppleinc } from "react-icons/im";

const DownloadApp = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:mx-60 '>
      <Image src={downloadImage} alt='Download App' className='lg:w-[700px]' />
      <div>

        <h1 className='lg:text-5xl text-center lg:text-start px-5 pt-2 lg:pt-0 text-xl font-bold text-gray-950 lg:w-[700px]'>Download the app and start your investing journey now.</h1>

        <div className=' flex gap-3 mx-3 lg:gap-5 lg:pt-32 pt-14'>

          <div className='flex items-center bg-black w-fit text-white rounded-md p-1 gap-2 lg:gap-5 lg:px-8 lg:py-3 px-4'>
            <IoLogoGooglePlaystore className='lg:text-5xl text-xl'/>
            <div>
               <p className='text-xs'>GET IT ON</p>
               <h1 className='text-xl lg:text-2xl font-medium'>Google Play</h1>
            </div>
          </div>
          {/*  */}

          <div className='flex items-center bg-black w-fit text-white rounded-md p-1 gap-2 lg:gap-5 lg:px-8 lg:py-3 px-4'>
            <ImAppleinc className='lg:text-5xl text-xl'/>
            <div>
               <p className='text-xs'>Download on the </p>
               <h1 className='text-xl lg:text-2xl font-medium'>App Store</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
