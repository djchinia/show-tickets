This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Once the file has been cloned, "npm start" to view on localhost 3000.
---

Part 1: Currently, the artist’s name, city, venue, and date are all listed. 

Part 2: The filter has been implemented. Certain outliers do exist such as Inglewood being listed for Los Angeles and vice versa.

Part 3: 
One reason could be the filter not being easily visible. A/B testing with different designs might solve this problem. Another one that was touched on earlier is proximity. 

Certain locations are close enough to one another that they should be listed together. It’s easy to change the logic for Inglewood since its venue says Los Angeles. However, the opposite is not as simple to implement. 

A possible solution which would provide more functionality would be to use an API that geolocates based on a city’s location to find the rough longitude and latitude. Once the longitude and latitude is easy to access, we can use the user’s location to sort by the distance away from their location. We could also make a filter to show only events a certain distance from them. It’s more personalized, and it would provide more relevant matches. 
