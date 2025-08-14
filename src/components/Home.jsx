import React from 'react'

export default function Home() {
  return (
    <div>
       <div className='w-full lg:h-[500px] bg-orange-200 rounded-md my-2 flex p-2'>
        <div className='lg:w-[50%] lg:h-full lg:px-10 lg:py-10'>
            <h1 className='pt-10 md:text-[40px] md:w-[100%] lg:text-[50px] b text-green-800 font-bold'>Grab Up to <span className='text-red-600 animate-pulse'>50% off</span> on Selected Headphone</h1>
        </div>
        <div className='lg:w-[50%] lg:h-full lg:py-10 '>
            <img src="public/image/headphone1.png" alt="" />
        </div>
      </div>
    </div>
  )
}
