import React from 'react'
import Image from 'next/image'
import wooden from '@/public/wooden-icons.png'
import { RiUserFill } from "react-icons/ri";
import StartInvestingBtn from '../components/startInvestingBtn';
import { MdAccountBalanceWallet } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";

const Hero2 = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-44 justify-center pt-9 bg-[#fefbf5]'>
        <div className='p-7 lg:p-0 lg:w-[550px]'>
            <Image src={wooden} alt=''/>
        </div>

        <div className='py-3 px-12'>
            <h1 className='lg:text-6xl text-xl font-semibold lg:w-[500px] pb-6 lg:pb-10 text-gray-800'>No more restriction</h1>
            <p className='lg:text-xl text-gray-800'>Investing from Africa has never been easier. Get started in 3 easy steps</p>

            <div className='flex flex-col gap-14 lg:flex-row pt-10'>
                <div>
                <RiUserFill className='text-4xl text-[#07775d]'/>
                <h2 className='text-xl font-semibold pt-5 text-gray-800'>Creact an account</h2>
                <p className='lg:w-[200px] pt-4 text-gray-800'>by selecting your country and instantly
                     verify your identity using your
                      government issued number like
                       your Bank Verification Number 
                       or National Identity Number.</p>

                   <div className='hidden lg:flex'> 
                     <StartInvestingBtn/>
                   </div>
                </div>

                {/*  */}

                <div>
                <MdAccountBalanceWallet className='text-4xl text-[#07775d]'/>
                <h2 className='text-xl font-semibold pt-5 text-gray-800'>Fund your wallet</h2>
                <p className='lg:w-[200px] pt-4 text-gray-800'>via multiple channels 
                    including your local currency cards and our partner
                     will handle the currency conversion instantly
                      in one click.</p>

                   
                </div>

                {/*  */}

                <div>
                <AiFillBank className='text-4xl text-[#07775d]'/>
                <h2 className='text-xl font-semibold pt-5 text-gray-800'>Start Investing</h2>
                <p className='lg:w-[200px] pt-4 text-gray-800'>in your favorite public listed US company, a bundle 
                    of companies called an ETF,other African companies, 
                    mutual funds, or fixed income products from around 
                    the world.</p>

                   <div className='flex lg:hidden'> 
                     <StartInvestingBtn/>
                   </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2
