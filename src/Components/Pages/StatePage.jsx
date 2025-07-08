import React, { useEffect, useState } from 'react';
import FeaturedDestinationCard from '../Cards/FeaturedDestinationCard';
import templeData from '../../data/ReligiousPlaces.json'

function StatePage() {

  // const apiKey = import.meta.env.VITE_API_KEY;
  // const apiHost = import.meta.env.VITE_API_HOST;
  // const apiURL = import.meta.env.VITE_API_URL;


  const states = [
  // 28 States
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",

  // 8 Union Territories
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];
  // const [stateData, setStateData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [displayedData, setDisplayedData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [selectedState, setSelectedState] = useState('');

  const filteredData = selectedState
    ? templeData.religious_places.filter(place => place.state === selectedState)
    : templeData.religious_places;

  useEffect(() => {
    console.log("Selected state:", selectedState);
    console.log("Filtered data:", filteredData);
    setLoading(true);
    const timeout = setTimeout(() => {
      setDisplayedData(filteredData.slice(0, itemsToShow));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [itemsToShow, selectedState]);


  // Alternate to use lazy loading as page scrolls

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop
  //       >= document.documentElement.offsetHeight - 100
  //     ) {
  //       // Load more when reaching near bottom
  //       setItemsToShow(prev => prev + 6);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Alternate : fetch data from api

  // useEffect(() => {
  //   fetch(apiURL, {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': apiKey,
  //       'X-RapidAPI-Host': apiHost
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);

  //       setStateData(data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.log('Error fetching data', error);
  //       setLoading(false);

  //     })
  // }, [])

  return (<>
    <section className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold bg-gradient-to-t from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4'>Search By State</h2>
          <p text-xl text-gray-900 max-w-2xl mx-aut>Reach your dream destination by making precise search</p>
          <select className='bg-white border-2 border-black rounded-full p-3 m-3 w-full max-w-3xl mx-auto shadow-2xl' value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value)
              setItemsToShow(6)
            }} >
            <option value="" selected >All States</option>
            {states.map((state) => (
              <option value={state} key={state}>{state}</option>
            ))}
          </select>
          {isLoading ? (
            <h2 className="text-center">Loading...</h2>
          ) : displayedData.length === 0 ? (
            <p className='text-gray-500'>No religious places found for this state.</p>
          ) : (
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
                {displayedData.map((place) => (
                  <FeaturedDestinationCard
                    key={place.id}
                    id={place.id}
                    title={place.name}
                    description={place.description}
                    imageUrl={place.image}
                    tags={[place.location, place.country]}
                    distance={place.distance_from_airport}
                    rating={place.rating}
                  />
                ))}
              </div>
              {displayedData.length < filteredData.length && (
                <div className='text-center mt-4'>
                  <button
                    onClick={() => setItemsToShow(prev => prev + 6)}
                    className='px-6 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300'
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )
          }


        </div>
        <div>

        </div>
      </div>
    </section>
  </>)
}
export default StatePage;