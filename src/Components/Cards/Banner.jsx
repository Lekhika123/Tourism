import React from 'react'
import bg from '../../assets/bg.jpg'

function Banner() {
    // const bgImage =""
    return (
        <section className='overflow-hidden justify-center items-center h-screen flex relative'>
            <div style={{ backgroundImage:`url(${bg})` }} className=' absolute bg-no-repeat bg-center bg-cover inset-0'>
                
            </div>
            <div className='absolute inset-0 bg-black opacity-40'></div>
            <div className='text-white text-center px-4 max-w-4xl mx-auto z-10 relative'>
                <h1 className='leading-tight font-bold text-5xl mb-6'>Discover Sacred India</h1>
                <p className='mb-8 text-xl font-light md:text-2xl'>Explore India's most sacred temples, ancient shrines, and spiritual destinations. Find peace and divine blessings.</p>


            </div>
        </section>
    )
}

export default Banner;