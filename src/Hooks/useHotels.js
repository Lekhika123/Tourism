import { useState, useEffect } from 'react';
import { fetchHotels } from '../services/HotelServices';

const useHotels = (latitude, longitude) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotels = async () => {
      if (!latitude || !longitude) {
        setError('No coordinates available for this location.');
        return;
      }

      setLoading(true);
      try {
        const hotelData = await fetchHotels(latitude, longitude);
        setHotels(hotelData);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch hotel data.');
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, [latitude, longitude]);

  return { hotels, loading, error };
};

export default useHotels;