import React from 'react'
import bg from '../../assets/bg.jpg'
import { useState } from 'react';

function Banner() {
     const [query, setQuery] = useState("");

  const handleClear = () => setQuery("");
    // const bgImage =""
    return (
        <section className='overflow-hidden justify-center items-center h-screen flex relative'>
            <div style={{ backgroundImage: `url(${bg})` }} className=' absolute bg-no-repeat bg-center bg-cover inset-0'>

            </div>
            <div className='absolute inset-0 bg-black opacity-40'></div>
            <div className='text-white text-center px-4 max-w-4xl mx-auto z-10 relative'>
                <h1 className='leading-tight font-bold text-5xl mb-6'>Discover Sacred India</h1>
                <p className='mb-8 text-xl font-light md:text-2xl'>Explore India's most sacred temples, ancient shrines, and spiritual destinations. Find peace and divine blessings.</p>
                {/* <div className='flex flex-row  bg-white rounded-full p-2 max-w-3xl mx-auto shadow-2xl'>
                    <div className='px-4 py-2 items-center'>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#b9babc" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </div>
                    
                </div> */}
                <div className="relative w-full max-w-3xl mx-auto shadow-2xl ">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full text-gray-900 bg-white pl-10 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Search Icon - Left */}
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                                />
                            </svg>
                        </div>

                        {/* Clear Icon (X) - Right */}
                        {query && (
                            <button
                                onClick={handleClear}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.707 6.707a1 1 0 00-1.414-1.414L10 10l-4.707 4.707a1 1 0 001.414 1.414L10 11.414l4.707 4.707a1 1 0 001.414-1.414L11.414 10l4.707-4.707a1 1 0 00-1.414-1.414L10 8.586 6.707 6.707z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>

            </div>
        </section>
    )
}

export default Banner;

