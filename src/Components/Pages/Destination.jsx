import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import templeData from '../../data/RD.json';
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
  const { hotels, loading, error } = useHotels(worshipPlace.lat, worshipPlace.lng);

  // Initialize TomTom map when modal opens
  useEffect(() => {
    if (isMapOpen && window.tt) {
      const mapElement = document.getElementById('map');
      if (!mapElement) return;

      const map = window.tt.map({
        key: 'Lc59kXxPqsEUU1DX6p9a7EdCfBVaIyWW', // Replace with your TomTom API key
        container: 'map',
        center: [worshipPlace.lng, worshipPlace.lat], // TomTom uses [lng, lat]
        zoom: 15,
      });

      map.on('load', () => {
        new window.tt.Marker()
          .setLngLat([worshipPlace.lng, worshipPlace.lat])
          .setPopup(new window.tt.Popup().setHTML(`<b>${worshipPlace.name}</b>`))
          .addTo(map)
          .togglePopup();
      });

      // Cleanup map on modal close or component unmount
      return () => {
        if (map) map.remove();
      };
    }
  }, [isMapOpen, worshipPlace.lat, worshipPlace.lng, worshipPlace.name]);

  // Open modal and load map
  const handleOpenMap = () => {
    setIsMapOpen(true);
  };

  // Close modal
  const handleCloseMap = () => {
    setIsMapOpen(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={worshipPlace.image}
            alt={worshipPlace.name}
            className="w-full h-auto object-cover mx-auto rounded-2xl"
          />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{worshipPlace.name}</h2>
              <svg
                onClick={handleOpenMap}
                className="h-7 w-7 ml-3 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#c91d1d"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </div>
            <p className="text-gray-700 mb-4">{worshipPlace.description}</p>
            <p className="text-gray-700 mb-4">{worshipPlace.details}</p>
            <div className="mt-4 space-y-2">
              <p className="text-black text-sm">
                <strong>State:</strong> {worshipPlace.state}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Location:</strong> {worshipPlace.location}, {worshipPlace.country}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Distance from Airport:</strong> {worshipPlace.distance_from_airport}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Rating:</strong> {worshipPlace.rating}/5
              </p>
              {worshipPlace.history && (
                <p className="text-gray-500 text-sm">
                  <strong>History:</strong> {worshipPlace.history}
                </p>
              )}
              {worshipPlace.best_time_to_visit && (
                <p className="text-gray-500 text-sm">
                  <strong>Best Time to Visit:</strong> {worshipPlace.best_time_to_visit}
                </p>
              )}
              {worshipPlace.entry_fees && (
                <p className="text-gray-500 text-sm">
                  <strong>Entry Fees:</strong> {worshipPlace.entry_fees}
                </p>
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
              <p className="text-red-500 text-sm">Error loading hotels: {error}</p>
            ) : hotels && hotels.length > 0 ? (
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

      {/* Modal for TomTom Map */}
      {isMapOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative">
            {/* handleCloseMap is used here in the close button */}
            <button
              onClick={handleCloseMap}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">{worshipPlace.name}</h3>
            <div id="map" className="w-full h-96"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destination;