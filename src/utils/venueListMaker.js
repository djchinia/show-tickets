import json from './eventlist';

const event = json['Items'];

const venueListMaker = () => {
  const venueList = [];
  for (let i = 0; i < event.length; i++) {
    if (!venueList.includes(event[i])) {
      venueList.push(event[i]['VenueCity']);
    }
  }
  return venueList;
};

export default venueListMaker;
