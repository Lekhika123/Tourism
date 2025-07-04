import React from 'react'
import FeaturedDestinationCard from './Cards/FeaturedDestinationCard';
import featuredDestinations from '../data/FeaturedDestination.json'
import { Link } from 'react-router-dom';

function Home() {
    const quickLinks = [
        { id: 'char-dham', name: 'Char Dham Yatra', path: '', color: 'bg-gradient-to-r from-[#0088f7] to-[#6200ff]' },
        { id: 'vaishno-devi', name: 'Vaishno Devi', path: '', color: 'bg-gradient-to-r from-[#f70000] to-[#ffc400]' },
        { id: 'Amarnath', name: 'Amarnath Yatra', path: '', color: 'bg-gradient-to-r from-[#00f700] to-[#00ffdd]' },
        { id: 'jagannnath', name: 'Jagannath Puri', path: '', color: 'bg-gradient-to-r from-[#9400f7] to-[#2600ff]' },
        { id: 'Kailash Parvat', name: 'Kailash Parvat', path: '', color: 'bg-gradient-to-r from-[#f70000] to-[#ff00b3]' },
    ];
    const testimonials = [
        {
            quote: "Planning my Vaishno Devi trip was seamless with the deatiled guides and hostel suggestions!",
            name: "Sample pilgrim",
            location: "Delhi"
        },
        {
            quote: "Char Dham Yatra Itinerary helped me organize a spiritual journey of a lifetime.",
            name: "Sample pilgrim",
            location: "Mumbai"
        },
        {
            quote: "Found all the travel tips I needed for a hassle free Tirupati darshan !",
            name: "Sample pilgrim",
            location: "Hyderabad"
        }
    ]
    return (
        <>
            <section className='bg-white py-16'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold bg-gradient-to-t from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4'>
                            Featured Destination
                        </h2>
                        <p className='text-xl text-gray-900 max-w-2xl mx-auto'>
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

                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold bg-gradient-to-t from-[#f70000] to-[#eeff00] text-transparent bg-clip-text mb-4'>Quicks Links</h2>
                        <p className='text-xl text-gray-900 max-w-2xl mx-auto'>Jumpstart your spiritual journey with these curated resources</p>
                        <div className='grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-12'>
                            {quickLinks.map((link) => (
                                <Link key={link.id} to={link.path} className={`${link.color} text-white font-semibold px-1 py-2 rounded-4xl hover:brightness-90 hover:scale-105 transition duration-200 text-center border-2 border-amber-300 `} aria-label={link.name}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>


            </section>
            <section className='bg-white py-16'>

                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold bg-gradient-to-t from-[#f70000] to-[#eeff00] text-transparent bg-clip-text mb-5'>Sample Pilgrim Experiences</h2>
                        <p className='text-xl text-gray-900 max-w-2xl mx-auto'>Get inspired by what your spiritual journey could look like.<br/>Share your story to be featured.</p>
                        <div className='grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 py-12'>
                            
                                {testimonials.map((test, index) => (
                                    <div key={index} className='bg-white rounded-lg shadow-md p-6 border border-gray-200'>
                                        <p className='text-gray-600 italic text-sm mb-4'>{test.quote}</p>
                                        <p className='text-gray-900 font-semibold'>{test.name}</p>
                                        <p className='text-gray-500 text-sm'>{test.location}</p>
                                    </div>
                                ))
                                }
                           
                        </div>
                        <div className='text-center mt-8'>
                            <Link to="" className='bg-orange-600 text-white px-6 py-3 rounded-2xl hover:bg-orange-500 transition'>
                                Share Your Story
                            </Link>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home;