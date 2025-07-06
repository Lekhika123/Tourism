// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import FeaturedDestinationCard from '../Cards/FeaturedDestinationCard';
// import featuredDestinations from '../../data/FeaturedDestination.json';
// // import states from '../../data/states.json';

// function StatePage() {
//   const states = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//   "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//   "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//   "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
// ];
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedReligions, setSelectedReligions] = useState([]);
//   const [filteredDestinations, setFilteredDestinations] = useState([]);

//   // Update filtered destinations based on state and religion
//   useEffect(() => {
//     let result = [...featuredDestinations];

//     if (selectedState) {
//       result = result.filter((dest) => dest.stateId === selectedState);
//     }

//     if (selectedReligions.length > 0) {
//       result = result.filter((dest) =>
//         selectedReligions.includes(dest.religion)
//       );
//     }

//     setFilteredDestinations(result.length > 0 ? result : []);
//   }, [selectedState, selectedReligions]);

//   // Handle state change
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   // Handle religion change
//   const handleReligionChange = (e) => {
//     const religion = e.target.value;
//     setSelectedReligions((prev) =>
//       prev.includes(religion)
//         ? prev.filter((r) => r !== religion)
//         : [...prev, religion]
//     );
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <main className="flex-1">
//         <section className="bg-white py-16">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F70000] to-[#EEFF00] text-transparent bg-clip-text mb-4">
//                 Search Worship Places by State
//               </h1>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Explore sacred sites across India. Select a state and religion to start your journey.
//               </p>
//             </div>
//             <div className="text-center mb-8">
//               <select
//                 value={selectedState}
//                 onChange={handleStateChange}
//                 className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mr-4"
//                 aria-label="Select a state"
//               >
//                 <option value="">All States</option>
//                 {states.map((state) => (
//                   <option key={state.id} value={state.id}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//               <div className="inline-flex flex-wrap gap-2 mt-2 justify-center">
//                 {['Hindu', 'Sikh', 'Muslim', 'Buddhist', 'Christian', 'Jain'].map((religion) => (
//                   <label key={religion} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       value={religion}
//                       checked={selectedReligions.includes(religion)}
//                       onChange={handleReligionChange}
//                       className="mr-1"
//                     />
//                     {religion}
//                   </label>
//                 ))}
//               </div>
//             </div>
//             {filteredDestinations.length === 0 && !selectedState && selectedReligions.length === 0 ? (
//               <div className="text-center">
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-[#F70000] to-[#EEFF00] text-transparent bg-clip-text mb-4">
//                   Explore Worship Places Across India
//                 </h2>
//                 <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
//                   Discover a variety of sacred sites. Use the filters above to narrow your search.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {featuredDestinations.slice(0, 6).map((dest) => (
//                     <FeaturedDestinationCard
//                       key={dest.id}
//                       id={dest.id}
//                       title={dest.title}
//                       description={dest.description}
//                       imageUrl={dest.imageUrl}
//                       tags={dest.tags}
//                       distance={dest.distance}
//                       rating={dest.rating}
//                     />
//                   ))}
//                 </div>
//               </div>
//             ) : filteredDestinations.length === 0 ? (
//               <p className="text-center text-gray-600">No worship places found. Try a different state or religion.</p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredDestinations.map((dest) => (
//                   <FeaturedDestinationCard
//                     key={dest.id}
//                     id={dest.id}
//                     title={dest.title}
//                     description={dest.description}
//                     imageUrl={dest.imageUrl}
//                     tags={dest.tags}
//                     distance={dest.distance}
//                     rating={dest.rating}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default StatePage;

import React, { useEffect, useState } from 'react';
import FeaturedDestinationCard from '../Cards/FeaturedDestinationCard';

function StatePage() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiHost = import.meta.env.VITE_API_HOST;
  const apiURL = import.meta.env.VITE_API_URL;


  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  const [stateData, setStateData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiURL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        setStateData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data', error);
        setLoading(false);

      })
  }, [])

  return (<>
    <section className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold bg-gradient-to-t from-[#f70000] to-[#ffc400] text-transparent bg-clip-text mb-4'>Search By State</h2>
          <p text-xl text-gray-900 max-w-2xl mx-aut>Reach your dream destination by making precise search</p>
          <select className='bg-white border-2 border-black rounded-full p-4 w-full max-w-3xl mx-auto shadow-2xl'>
            {states.map((state) => (
              <option value="state">{state}</option>
            ))}
          </select>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
              {stateData.data.map((state) => (
                <FeaturedDestinationCard
                  key={state.temple_name}
                  id={state.temple_name}
                  title={state.temple_name}
                  description={state.temple_description}
                  imageUrl={state.temple_image}
                  tags={[state.district,state.country]}
                  distance={state.address}
                  rating={state.temple_location}
                />
              ))}

            </div>
          )}

        </div>
        <div>

        </div>
      </div>
    </section>
  </>)
}
export default StatePage;