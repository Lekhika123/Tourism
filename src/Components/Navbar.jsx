import React from 'react';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <>
        //     <nav className='text-orange-500 px-6 py-4 flex justify-between items-center w-full shadow-md'>
        //         <h2 className='text-2xl font-bold tracking-tight'>MANDIRMANZIL</h2>
        //         <ul className='hidden md:flex flex-1 justify-center space-x-4 text-lg font-medium items-center'>
        //             <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Home</a></li>
        //             <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Worship Places</a></li>
        //             <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Pilgrimages</a></li>
        //             <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Prayer Guides</a></li>
        //             <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>About</a></li>
        //             <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Contact</a></li>

        //         </ul>
        //         <button className="md:hidden text-2xl items-end focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        //             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        //                <path fill="#ff3300" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        //             </svg> */}
        //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        //             </svg>
        //         </button>
        //         {isOpen && (
        //             <ul className="absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-4 md:hidden">
        //                 <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Home</a></li>
        //                 <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Worship Places</a></li>
        //                 <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Pilgrimages</a></li>
        //                 <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Prayer Guides</a></li>
        //                 <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>About</a></li>
        //                 <li className='hover:text-red-500 hover:underline transition-colors duration-200'><a href=''>Contact</a></li>
        //             </ul>
        //         )}
        //     </nav>
        // </>
        <header className='sticky top-0 z-50 bg-white shadow-lg'>
            <nav className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center'>
                        <span className='text-xl font-bold text-orange-600 tracking-tight'>MANDIRMANZIL</span>
                    </div>
                    <div className='hidden md:block'>
                        <div className='m-10 flex items-baseline'>
                            <a href="" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Home</a>
                            <a href="" className='hover:text-red-500 hover:underline transition-colors duration-200 rounded-md px-3 py-3 text-sm font-semibold text-ocean '>Worship Places</a>
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