import axios from 'axios';

const geocode = async () => {
  try {
    const formattedLocation = 'Houston, TX';
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: formattedLocation,
          key: 'AIzaSyB9AwifbsqM65PAbTYG43L8P423yiTOO6A',
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
