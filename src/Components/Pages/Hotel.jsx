import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from '../../data/Hotelsdata.json'; // Adjust path as needed

function HotelDetail() {
  const { id } = useParams();

  // Find the hotel by ID
  const hotel = hotelsData.find((hotel) => hotel.id === id) || {
    id: 'not-found',
    name: 'Hotel Not Found',
    image: 'https://via.placeholder.com/800x400',
    description: 'No details available for this hotel.',
    type: '',
    category: '',
    address: '',
    city: '',
    state: '',
    country: '',
    coordinates: { lat: 0, lng: 0 },
    distance_from_mahakaleshwar: '',
    rating: 0,
    price_per_night: 'N/A',
    room_types: [],
    amenities: [],
    booking_url: '#',
    contact: '',
    check_in_time: '',
    check_out_time: '',
    source: [],
  };

  const [isMapOpen, setIsMapOpen] = useState(false);

  // Initialize TomTom map when modal opens
  useEffect(() => {
    if (isMapOpen && window.tt) {
      const mapElement = document.getElementById('map');
      if (!mapElement) return;

      const map = window.tt.map({
        key: 'Lc59kXxPqsEUU1DX6p9a7EdCfBVaIyWW', // Replace with your TomTom API key
        container: 'map',
        center: [hotel.coordinates.lng, hotel.coordinates.lat], // TomTom uses [lng, lat]
        zoom: 15,
      });

      map.on('load', () => {
        new window.tt.Marker()
          .setLngLat([hotel.coordinates.lng, hotel.coordinates.lat])
          .setPopup(new window.tt.Popup().setHTML(`<b>${hotel.name}</b>`))
          .addTo(map)
          .togglePopup();
      });

      // Cleanup map on modal close or component unmount
      return () => {
        if (map) map.remove();
      };
    }
  }, [isMapOpen, hotel.coordinates.lat, hotel.coordinates.lng, hotel.name]);

  // Open modal and load map
  const handleOpenMap = () => {
    setIsMapOpen(true);
  };

  // Close modal
  const handleCloseMap = () => {
    setIsMapOpen(false);
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-amber-500' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.463a1 1 0 00-1.176 0l-3.39 2.463c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.26 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    ));
    return <div className="flex">{stars}</div>;
  };

  return (
    <section className="py-12 bg-gray-50 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-150 object-cover"
          />
          <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/50 to-transparent">
            <h2 className="text-3xl font-bold text-white">{hotel.name}</h2>
            <p className="text-sm text-gray-200">{hotel.city}, {hotel.state}, {hotel.country}</p>
          </div>
          <button
            onClick={handleOpenMap}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
          >
            <svg
              className="h-6 w-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description Card */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">About the Hotel</h3>
              <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
            </div>

            {/* Details Card */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Details</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Type:</strong> {hotel.type.charAt(0).toUpperCase() + hotel.type.slice(1)}</p>
                <p><strong>Category:</strong> {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)}</p>
                <p><strong>Address:</strong> {hotel.address}</p>
                <p><strong>Distance from Mahakaleshwar Temple:</strong> {hotel.distance_from_mahakaleshwar}</p>
                <p><strong>Check-in:</strong> {hotel.check_in_time}</p>
                <p><strong>Check-out:</strong> {hotel.check_out_time}</p>
                <p><strong>Contact:</strong> {hotel.contact}</p>
                <div className="flex items-center gap-2">
                  <strong>Rating:</strong>
                  <StarRating rating={hotel.rating} />
                  <span>({hotel.rating}/5)</span>
                </div>
              </div>
            </div>

            {/* Amenities Card */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
              {hotel.amenities && hotel.amenities.length > 0 ? (
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  {hotel.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No amenities listed.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 top-6 transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Book Your Stay</h3>
              <p className="text-lg font-medium text-gray-700 mb-2">{hotel.price_per_night} / night</p>
              <a
                href={hotel.booking_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Book Now
              </a>
            </div>

            {/* Room Types Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Room Types</h3>
              {hotel.room_types && hotel.room_types.length > 0 ? (
                <ul className="space-y-2 text-gray-600">
                  {hotel.room_types.map((room, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {room}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No room types listed.</p>
              )}
            </div>

            {/* Sources Card */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources</h3>
              {hotel.source && hotel.source.length > 0 ? (
                <ul className="space-y-2 text-gray-600">
                  {hotel.source.map((source, index) => (
                    <li key={index}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        {source.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No sources listed.</p>
              )}
            </div>
          </div>
        </div>

        {/* Modal for TomTom Map */}
        {isMapOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-4xl relative shadow-xl">
              <button
                onClick={handleCloseMap}
                className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 text-2xl font-bold transition-colors duration-300"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{hotel.name}</h3>
              <div id="map" className="w-full h-96 rounded-lg shadow-md"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HotelDetail;




