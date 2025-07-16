import axios from 'axios';

const RAPIDAPI_KEY = import.meta.env.VITE_API_KEY || '3f1d7ec2f7msh2222cccff37e78ap1db387jsn429fd160cda1';
const RAPIDAPI_HOST = 'hotels4.p.rapidapi.com';

export const fetchHotels = async (latitude, longitude) => {
  try {
    // Step 1: Get destination ID using coordinates
    const locationResponse = await axios.get(
      'https://hotels4.p.rapidapi.com/locations/v2/search',
      {
        params: {
          latitude,
          longitude,
          locale: 'en_US',
        },
        headers: {
          'x-rapidapi-host': RAPIDAPI_HOST,
          'x-rapidapi-key': RAPIDAPI_KEY,
        },
      }
    );

    const destinationId = locationResponse.data.suggestions?.find(
      (suggestion) => suggestion.group === 'CITY_GROUP'
    )?.entities[0]?.destinationId;

    if (!destinationId) {
      throw new Error('No destination found for this location.');
    }

    // Step 2: Fetch hotels using destination ID
    const hotelsResponse = await axios.post(
      'https://hotels4.p.rapidapi.com/v2/properties/list',
      {
        destinationId,
        checkIn: new Date().toISOString().split('T')[0], // Today's date
        checkOut: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Tomorrow
        adults: 1,
        sortOrder: 'PRICE',
        locale: 'en_US',
        currency: 'USD',
      },
      {
        headers: {
          'x-rapidapi-host': RAPIDAPI_HOST,
          'x-rapidapi-key': RAPIDAPI_KEY,
          'content-type': 'application/json',
        },
      }
    );

    const hotelData = hotelsResponse.data.data?.body?.searchResults?.results || [];
    return hotelData.map((hotel) => ({
      name: hotel.name,
      distance: hotel.distance?.value ? `${hotel.distance.value} ${hotel.distance.unit}` : 'N/A',
      price_per_night: hotel.ratePlan?.price?.current || 'N/A',
      rating: hotel.guestReviews?.rating || 0,
      booking_url: hotel.urls?.hotelPage || '#',
    }));
  } catch (error) {
    console.error('Error fetching hotel data:', error);
    throw error;
  }
};