import React from 'react'

function About() {
  return (
    <div className='pl-5'>
        <h1 className='text-center text-7xl font-bold'>About Us</h1>
        <div className='flex gap-5 justify-center p-10'>
            <div className='w-[50%]'>
                <p className='text-5xl font-semibold'>Welcome to <span className='text-6xl'>H</span>oomies..</p>
                <p className='text-2xl mt-10'>Your trusted partner to help you find the perfect rental. We make renting easy, affordable, and hassle-free with a seamless experience tailored to meet your needs.</p>
            </div>
            <div className='w-[50%] flex flex-col items-center'>
                <p className='text-5xl font-semibold mb-10'>Why Us...</p>
                <ul className='text-2xl'>
                    <li>* Short-term rentals</li>
                    <li>* Long-term rentals</li>
                    <li>* 24/7 customer service</li>
                    <li>* Easy booking & Flexible Plans</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About