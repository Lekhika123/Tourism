import React from 'react';
import { useParams } from 'react-router-dom';
import templeData from '../../data/ReligiousPlaces.json';

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
    entry_fees: ''
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={worshipPlace.image}
            alt={worshipPlace.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{worshipPlace.name}</h2>
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
      </div>
    </div>
  );
}

export default Destination;