import json from './eventlist';

const event = json['Items'];

const venueObjFilter = cityName => {
  const newItems = [];
  for (let i = 0; i < event.length; i++) {
    if (cityName === event[i]['VenueCity']) {
      newItems.push(event[i]);
    }
  }
  return newItems;
};

export default venueObjFilter;
