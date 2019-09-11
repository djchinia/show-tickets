import json from './eventlist';

const event = json['Items'];

const venueListMaker = () => {
  const venueList = [];
  for (let i = 0; i < event.length; i++) {
    if (!venueList.includes(event[i]['VenueCity'])) {
      venueList.push(event[i]['VenueCity']);
    }
  }
  venueList.sort();
  return venueList;
};

export default venueListMaker;
