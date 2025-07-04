import React from 'react'
import FeaturedDestinationCard from './Cards/FeaturedDestinationCard';
import featuredDestinations from '../data/FeaturedDestination.json'
import { Link } from 'react-router-dom';

function Home() {
    const quickLinks = [
        { id: 'char-dham', name: 'Char Dham Yatra', path: '', color: 'bg-green-600' },
        { id: 'vaishno-devi', name: 'Vaishno Devi', path: '', color: 'bg-red-600' },
        { id: 'Amarnath', name: 'Amarnath Yatra', path: '', color: 'bg-blue-600' },
        { id: 'jagannnath', name: 'Jagannath Puri', path: '', color: 'bg-yellow-600' },
        { id: 'Kailash Parvat', name: 'Kailash Parvat', path: '', color: 'bg-purple-600' },
    ];
    return (
        <>
            <section className='bg-white py-16'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                            Featured Destination
                        </h2>
                        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                            Discover the world's most breathtaking destinations, each offering unique experiences and unforgettable adventures
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                            {featuredDestinations.map((dest) => (
                                <FeaturedDestinationCard
                                    key={dest.id}
                                    id={dest.id}
                                    title={dest.title}
                                    description={dest.description}
                                    imageUrl={dest.imageUrl}
                                    tags={dest.tags}
                                    distance={dest.distance}
                                    rating={dest.rating}
                                />
                            ))}
                        </div>

                    </div>
                </div>

            </section>
            <section className='bg-gray-100 py-16'>
                {/* <div> */}
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='text-center'>
                            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Quicks Links</h2>
                            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Jumpstart your spiritual journey with these curated resources</p>
                            <div className='grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-12'>
                                {quickLinks.map((link) => (
                                    <Link key={link.id} to={link.path} className={`${link.color} text-white font-semibold px-1 py-2 rounded-4xl hover:brightness-90 hover:scale-105 transition duration-200 text-center border-2 border-amber-300 `} aria-label={link.name}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                {/* </div> */}

            </section>
        </>
    )
}

export default Home;