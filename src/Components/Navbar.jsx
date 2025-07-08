import React from 'react';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <header className='sticky top-0 z-50 bg-[#FFF8E1] shadow-lg'>
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center '>
                    <div className='flex-1/12 items-center'>
                        <span className='text-xl font-bold bg-gradient-to-t from-[#f70000] to-[#eeff00] text-transparent bg-clip-text tracking-tight'>MANDIRMANZIL</span>
                    </div>
                    <div className='hidden md:block flex-11/12'>
                        <div className='ml-10 flex items-baseline space-x-4 justify-center'>
                            <a href="/" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Home</a>
                            <a href="/states" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Worship Places</a>
                            <a href="" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Pilgrimages</a>
                            <a href="" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Prayer Guides</a>
                            <a href="" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>About</a>
                            <a href="" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Contact Us</a>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button className="text-2xl items-end focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen?(
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="#000000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            ):
                            (
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                               </svg>
                            )}
                            
                        </button>
                        {isOpen && (
                            <div className='md:hidden absolute top-16 w-full left-0  bg-white border-t'>
                               <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                                    <a href="" className="block px-3 py-2 rounded-md text-base w-ful text-left text-ocean font-semibold hover:text-red-500 hover:underline transition-colors duration-200"> Home</a>
                                    <a href="" className="block px-3 py-2 rounded-md text-base w-ful text-left text-ocean font-semibold hover:text-red-500 hover:underline transition-colors duration-200">Worship</a>
                                    <a href="" className="block px-3 py-2 rounded-md text-base w-ful text-left text-ocean font-semibold hover:text-red-500 hover:underline transition-colors duration-200">Pilgrimages</a>
                                    <a href="" className="block px-3 py-2 rounded-md text-base w-ful text-left text-ocean font-semibold hover:text-red-500 hover:underline transition-colors duration-200">Prayer Guides</a>
                                    <a href="" className="block px-3 py-2 rounded-md text-base w-ful text-left text-ocean font-semibold hover:text-red-500 hover:underline transition-colors duration-200">About</a>
                                    <a href="" className="block px-3 py-2 rounded-md text-base w-ful text-left text-ocean font-semibold hover:text-red-500 hover:underline transition-colors duration-200">Contact US</a>

                               </div>
                            </div>
                        )}
                    </div>
                </div>

            </nav>

        </header>
    )
}
export default Navbar;