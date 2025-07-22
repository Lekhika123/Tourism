import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import worshipPlacesData from '../../data/ModifiedData.json';

function Pilgrimage() {
  const [filterState, setFilterState] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterRating, setFilterRating] = useState('All');

  // Extract unique states, types, and ratings for filters
  const states = ['All', ...new Set(worshipPlacesData.religious_places.map(place => place.state))];
  const types = ['All', ...new Set(worshipPlacesData.religious_places.map(place => place.type || 'Temple'))];
  const ratings = ['All', '5', '4', '3', '2', '1'];

  // Filter places based on state, type, and rating
  const filteredPlaces = worshipPlacesData.religious_places.filter(place => {
    const stateMatch = filterState === 'All' || place.state === filterState;
    const typeMatch = filterType === 'All' || (place.type || 'Temple') === filterType;
    const ratingMatch = filterRating === 'All' || Math.floor(place.rating) === parseInt(filterRating);
    return stateMatch && typeMatch && ratingMatch;
  });

  return (
    <section className="min-h-screen bg-cream-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1542051841857-7347e08c3a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Pilgrimage Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Discover Sacred Pilgrimage Sites</h1>
          <p className="text-lg text-gray-200 max-w-2xl">Embark on a spiritual journey across India's sacred destinations, each offering peace, devotion, and cultural richness.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 bg-white/95 backdrop-blur-sm p-4 rounded-full border border-gray-200">
          <div className="flex items-center">
            <label className="text-gray-800 font-semibold mr-2">State:</label>
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              className="p-2 bg-cream-100 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f70000] transition-colors"
            >
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="text-gray-800 font-semibold mr-2">Type:</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="p-2 bg-cream-100 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f70000] transition-colors"
            >
              {types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="text-gray-800 font-semibold mr-2">Rating:</label>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="p-2 bg-cream-100 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f70000] transition-colors"
            >
              {ratings.map((rating, index) => (
                <option key={index} value={rating}>{rating}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Pilgrimage Sites List */}
        <div className="space-y-6">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <Link
                key={place.id}
                to={`/worship-place/${place.id}`}
                className="group flex flex-col sm:flex-row items-center bg-white/95 backdrop-blur-sm border-b border-gray-200 py-6 hover:bg-gray-50 transition-colors duration-300"
              >
                <img
                  src={place.image || 'https://via.placeholder.com/300x200'}
                  alt={place.name}
                  className="w-full sm:w-48 h-48 object-cover rounded-lg group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#f70000] group-hover:to-[#ffc400] group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{place.location}, {place.state}, {place.country}</p>
                  <p className="text-gray-600 mt-2 line-clamp-2">{place.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.463a1 1 0 00-1.176 0l-3.39 2.463c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.26 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                    <span className="text-gray-600">{place.rating}/5</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600 text-center py-12">No pilgrimage sites found for the selected filters.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Pilgrimage;