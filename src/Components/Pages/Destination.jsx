import React from 'react';
import { useParams } from 'react-router-dom';
import templeData from '../../data/ReligiousPlaces.json';
import { useState } from 'react';
import useHotels from '../../Hooks/useHotels';

function Destination() {
  const { id } = useParams();
  const worshipPlace = templeData.religious_places.find((place) => place.id === id) || {
    id: 'not-found',
    name: 'Worship Place Not Found',
    image: 'https://via.placeholder.com/800x400',
    description: 'No details available for this worship place.',
    details: 'Please select another destination or check back later.',
    state: '',
    location: '',
    country: '',
    distance_from_airport: '',
    rating: 0,
    nearby_places: [],
    history: '',
    best_time_to_visit: '',
    entry_fees: '',
    lat: 0,
    lng: 0,
  };

  const [isMapOpen, setIsMapOpen] = useState(false);

  // Function to initialize and display the map in the modal
  const initMap = () => {
    const mapElement = document.getElementById('map');
    if (!mapElement || !window.google) return;

    const map = new window.google.maps.Map(mapElement, {
      zoom: 15,
      center: { lat: worshipPlace.lat, lng: worshipPlace.lng },
    });

    new window.google.maps.Marker({
      position: { lat: worshipPlace.lat, lng: worshipPlace.lng },
      map: map,
      title: worshipPlace.name,
    });
  };

  // Open modal and load map
  const handleOpenMap = () => {
    setIsMapOpen(true);
    // Delay map initialization to ensure modal DOM is rendered
    setTimeout(initMap, 0);
  };

  // Close modal
  const handleCloseMap = () => {
    setIsMapOpen(false);
  };
  const { hotels, loading, error } = useHotels(worshipPlace.lat, worshipPlace.lng);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={worshipPlace.image}
            alt={worshipPlace.name}
            className="w-220 h-auto object-cover mx-auto rounded-2xl"
          />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{worshipPlace.name}</h2>
              {/* <button
                onClick={handleOpenMap}
                className="text-blue-600 hover:text-blue-800 focus:outline-none bg-amber-300"
                title="View Location on Map"
              > */}
                <svg onClick={handleOpenMap} 
                className='h-7 w-7 ml=3'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#c91d1d" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
              {/* </button> */}
            </div>
            <p className="text-gray-600 mb-4">{worshipPlace.description}</p>
            <p className="text-gray-700 mb-4">{worshipPlace.details}</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-500 text-sm"><strong>State:</strong> {worshipPlace.state}</p>
              <p className="text-gray-500 text-sm"><strong>Location:</strong> {worshipPlace.location}, {worshipPlace.country}</p>
              <p className="text-gray-500 text-sm"><strong>Distance from Airport:</strong> {worshipPlace.distance_from_airport}</p>
              <p className="text-gray-500 text-sm"><strong>Rating:</strong> {worshipPlace.rating}/5</p>
              {worshipPlace.history && (
                <p className="text-gray-500 text-sm"><strong>History:</strong> {worshipPlace.history}</p>
              )}
              {worshipPlace.best_time_to_visit && (
                <p className="text-gray-500 text-sm"><strong>Best Time to Visit:</strong> {worshipPlace.best_time_to_visit}</p>
              )}
              {worshipPlace.entry_fees && (
                <p className="text-gray-500 text-sm"><strong>Entry Fees:</strong> {worshipPlace.entry_fees}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Places to Visit</h3>
          <div className="space-y-4">
            {worshipPlace.nearby_places && worshipPlace.nearby_places.length > 0 ? (
              worshipPlace.nearby_places.map((place, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={place.image || 'https://via.placeholder.com/150'}
                    alt={place.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-gray-900 font-medium">{place.name}</p>
                    <p className="text-gray-500 text-sm">{place.distance}</p>
                    {place.description && (
                      <p className="text-gray-500 text-sm">{place.description}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No nearby places available.</p>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Hotels</h3>
          <div className="space-y-4">
            {loading ? (
              <p className="text-gray-500 text-sm">Loading hotels...</p>
            ) : error ? (
              <p className="text-red-500 text-sm">{error}</p>
            ) : hotels.length > 0 ? (
              hotels.map((hotel, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div>
                    <p className="text-gray-900 font-medium">{hotel.name}</p>
                    <p className="text-gray-500 text-sm">Distance: {hotel.distance}</p>
                    <p className="text-gray-500 text-sm">Price: {hotel.price_per_night}</p>
                    <p className="text-gray-500 text-sm">Rating: {hotel.rating}/5</p>
                    <a
                      href={hotel.booking_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No hotels available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;