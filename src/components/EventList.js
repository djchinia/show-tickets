import React, { Component } from 'react';
import { Grid, Select, MenuItem } from '@material-ui/core';
import Event from './Event';
import venueListMaker from '../utils/venueListMaker';
import venueObjFilter from '../utils/venueObjFilter';
import json from '../utils/eventlist';

const allEvents = json['Items'];

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: allEvents,
      selectedCity: '',
      inputStr: '',
    };
  }

  render() {
    console.log(venueObjFilter('Houston'));
    const venueList = venueListMaker();
    return (
      <div>
        {this.state.events ? (
          <div>
            <Select
              value={this.state.selectedCity}
              //   onChange={handleChange}
              inputProps={{
                name: 'city',
                id: 'city-simple',
              }}
            >
              {venueList.map(singleVenue => (
                <MenuItem value={singleVenue}>{singleVenue}</MenuItem>
              ))}
            </Select>
            <Grid container style={{ padding: 40 }}>
              {this.state.events.map(singleEvent => (
                <Grid style={{ padding: 20 }} item xs={12} sm={6} lg={4} xl={3}>
                  <Event event={singleEvent} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          'No events found'
        )}
      </div>
    );
  }
}

export default EventList;
