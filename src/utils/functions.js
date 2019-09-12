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
