export const cityFilter = (eventlistItem, cityName) => {
  let newItems = [];
  for (let i = 0; i < eventlistItem.length; i++) {
    if (cityName === eventlistItem[i]['VenueCity']) {
      newItems.push(eventlistItem[i]);
    }
    if (cityName === '') {
      newItems = eventlistItem;
    }
  }
  return newItems;
};

export const cityLister = eventlistItem => {
  const venueList = [];
  for (let i = 0; i < eventlistItem.length; i++) {
    if (!venueList.includes(eventlistItem[i]['VenueCity'])) {
      venueList.push(eventlistItem[i]['VenueCity']);
    }
  }
  venueList.sort();
  return venueList;
};