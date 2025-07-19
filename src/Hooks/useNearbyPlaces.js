import { useState, useEffect } from 'react';
import worshipPlacesData from '../data/ModifiedData.json';

const useNearbyPlaces = (placeRefs) => {
    const [nearbyPlaces, setNearbyPlaces] = useState([]);

    useEffect(() => {
        const fetchedPlaces = placeRefs.map((place) => {
            const fullPlace = worshipPlacesData.religious_places.find((p) => p.id === place.id) || {
                id: place.id,
                name: 'Unknown Place',
                image: 'https://via.placeholder.com/150',
                description: 'No details available.',
                distance: place.distance,
            };
            return { ...fullPlace, distance: place.distance };
        });
        setNearbyPlaces(fetchedPlaces);
    }, [placeRefs]);


    return nearbyPlaces;
};

export default useNearbyPlaces;