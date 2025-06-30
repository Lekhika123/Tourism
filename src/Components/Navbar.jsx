import React from 'react';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='text-orange-500 px-6 py-4 flex items-center w-full shadow-md'>
                <h2 className='text-2xl font-bold tracking-tight'>MANDIRMANZIL</h2>
                <ul className='hidden md:flex flex-1 justify-center space-x-4 text-lg font-medium items-center'>
                    <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Home</a></li>
                    <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Worship Places</a></li>
                    <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Pilgrimages</a></li>
                    <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Prayer Guides</a></li>
                    <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>About</a></li>
                    <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Contact</a></li>

                </ul>
                <button className="md:hidden text-2xl items-end focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                       <path fill="#ff3300" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg> */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                {isOpen && (
                    <ul className="absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-4 md:hidden">
                        <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Home</a></li>
                        <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Worship Places</a></li>
                        <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Pilgrimages</a></li>
                        <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Prayer Guides</a></li>
                        <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>About</a></li>
                        <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Contact</a></li>
                    </ul>
                )}
            </nav>
        </>
    )
}
export default Navbar;