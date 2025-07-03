import React from 'react'
import FeaturedDestinationCard from './Cards/FeaturedDestinationCard';
import featuredDestinations from '../data/FeaturedDestination.json'

function Home() {
    return (
        <>
            <section className='bg-white py-16'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
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
        </>
    )
}

export default Home;