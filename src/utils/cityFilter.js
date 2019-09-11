import json from './eventlist';

const event = json['Items'];

const cityFilter = cityName => {
  let newItems = [];
  for (let i = 0; i < event.length; i++) {
    if (cityName === event[i]['VenueCity']) {
      newItems.push(event[i]);
    }
    if (cityName === '') {
      newItems = json['Items'];
    }
  }
  return newItems;
};

export default cityFilter;
