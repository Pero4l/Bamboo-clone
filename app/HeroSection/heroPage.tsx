import React from 'react'

const HeroPage = () => {
  return (
    <div className="lg:py-20 pt-14 mt-14 px-5 lg:px-60">
    <div className="overflow-hidden rounded-xl  lg:rounded-3xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:w-[2400px] block"
        src="/WhatsApp Video 2025-08-03 at 22.37.52.mp4"
      />
    </div>

    <div className='relative bottom-44 lg:bottom-[800px] lg:px-14 px-4'>
      <h1 className='lg:text-[130px] text-2xl font-medium w-[1px] text-white lg:w-4 lg:leading-38 lg:pt-4'>Dream Invest Live</h1>
      <button className='bg-[#e6ff55] text-green-700 py-1 px-2 lg:p-7 lg:px-12 rounded-xl lg:text-4xl lg:mt-20 mt-5'> Start investing</button>
    </div>
  </div>
  
  )
}

export default HeroPage
