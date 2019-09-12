import axios from 'axios';
import geocodeKey from './geocodeKey';

const geocode = async () => {
  try {
    const formattedLocation = 'Houston, TX';
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: formattedLocation,
          key: geocodeKey,
        },
      }
    );
    // geocode response with lat and long
    return response;
  } catch (error) {
    console.error();
  }
};

export default geocode;
