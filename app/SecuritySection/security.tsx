import React from 'react'
import Image from 'next/image';
import security from '@/public/security.png'
import { AiFillBank } from "react-icons/ai";
import StartInvestingBtn from '../components/startInvestingBtn';

const Security = () => {
  return (
    <div className='bg-[#fefbf5] flex flex-col lg:flex-row items-center mt-5 '>

        <div className='lg:mx-60 lg:mt-12 p-5 py-12'>
            <h1 className='lg:text-5xl text-2xl w-[240px] font-semibold lg:w-[600px] text-gray-900'>Your money is safe with us</h1>
            <p className='text-sm pt-7  lg:w-[580px] text-gray-800'>You trust us with your investments and we take that very seriously. We are committed to protecting your account with the highest standards of security available.</p>

            <div className='flex flex-col lg:flex-row gap-12 pt-10 '>
                <div>
                    <AiFillBank className='text-4xl text-[#07775d]' />
                    <h2 className='text-xl font-semibold pt-5 text-gray-800'>Bank-level security</h2>
                    <p className='w-[320px] pt-3 text-gray-800'>We use state-of-the-art data encryption when 
                        handling your financial information and two-factor 
                        authentication (2FA) protection. We're backed by
                         top financial market operators and we not only 
                         meet traditional banking security standards, we 
                         exceed them.</p>
                </div>

                <div>
                    <AiFillBank className='text-4xl text-[#07775d]' />
                    <h2 className='text-xl font-semibold pt-5 text-gray-800'>Secure Payments</h2>
                    <p className='w-[320px] pt-3 text-gray-800'>Our payment processor Flutterwave is PADSS & PCIDSS 
                        compliant satisfying the highest level of Security
                         Audit available.</p>
                </div>
            </div>

            {/*  */}

            <div className='flex flex-col lg:flex-row gap-10 pt-10'>
                <div>
                    <AiFillBank className='text-4xl text-[#07775d]' />
                    <h2 className='text-xl font-semibold pt-5 text-gray-800'>Covered by NG & US SEC</h2>
                    <p className='w-[310px] pt-3 text-gray-800'>Trading accounts are held by our partners, 
                        a firm duly registered by the Securities 
                        and Exchange Commission in Nigeria and in
                         the US</p>

                    <div className='hidden lg:flex'>
                    <StartInvestingBtn />
                    </div>
                </div>

                <div>
                    <AiFillBank className='text-4xl text-[#07775d]'/>
                    <h2 className='text-xl font-semibold pt-5 text-gray-800'>SIPC Insured</h2>
                    <p className='pt-3 text-gray-800'>Your US stocks portfolio is insured by the United 
                        States SIPC up to $500,000.</p>

                        <div className='lg:hidden flex'>
                    <StartInvestingBtn />
                    </div>
                </div>
            </div>

           
        </div>
        <div>
                <Image src={security} alt="Security Image" className=' hidden lg:flex pr-44 relative lg:right-44'  />  
            </div>
    </div>
  )
}

export default Security
