import axios from 'axios';
import geocodeKey from './geocodeKey';

export const cityLister = eventlistItem => {
  const cityList = [];
  for (let i = 0; i < eventlistItem.length; i++) {
    if (!cityList.includes(eventlistItem[i]['VenueCity'])) {
      cityList.push(eventlistItem[i]['VenueCity']);
    }
  }
  cityList.sort();
  return cityList;
};

export const cityFilter = (eventlistItem, cityName) => {
  let newItems = [];
  for (let i = 0; i < eventlistItem.length; i++) {
    if (
      cityName === eventlistItem[i]['VenueCity'] ||
      eventlistItem[i]['VenueName'].includes(cityName)
    ) {
      newItems.push(eventlistItem[i]);
    }
    if (cityName === '') {
      newItems = eventlistItem;
    }
  }
  return newItems;
};

// format cities as 'City, State' such as 'Houston, TX'
export const geocode = async () => {
  try {
    const { data } = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: 'San Francisco',
          key: geocodeKey,
        },
      }
    );

    const latLong = data['results'][0]['geometry']['location'];

    return latLong;
  } catch (error) {
    console.error();
  }
};

// // https://www.geodatasource.com/developers/javascript -- working on next
// export const proximityFinder = (lat1, long1, lat2, long2, unitOfMeasure) => {
//   if (lat1 === lat2 && long1 === long2) {
//     return 0;
//   } else {
//   }
// };
