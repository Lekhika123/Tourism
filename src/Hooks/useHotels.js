// Example useHotels hook
import hotelsData from '../data/Hotelsdata.json';
import { useState, useEffect } from 'react';

const useHotels = (hotelRefs) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchedHotels = hotelRefs.map((hotel) => {
      const fullHotel = hotelsData.find((h) => h.id === hotel.id) || {
        id: hotel.id,
        name: 'Unknown Hotel',
        distance: hotel.distance,
        price_per_night: 'N/A',
        rating: 0,
        booking_url: '#',
      };
      return { ...fullHotel, distance: hotel.distance };
    });
    setHotels(fetchedHotels);
  }, [hotelRefs]);

  return hotels;
};

export default useHotels;