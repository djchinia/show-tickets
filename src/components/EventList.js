import React, { Component } from 'react';
import { Grid, Select, MenuItem, FormControl, Button } from '@material-ui/core';
import Event from './Event';
import { cityFilter, cityLister } from '../utils/functions';
import json from '../utils/eventlist';

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: json['Items'], // initialize with all events
      selectedCity: '',
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const selectedEvent = cityFilter(json['Items'], event.target.value);
    this.setState({ selectedCity: event.target.value, events: selectedEvent });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const venueList = cityLister(json['Items']);
    console.log(venueList);
    return (
      <div>
        {this.state.events ? (
          <div>
            <form autoComplete="off">
              <br />
              <FormControl>
                <Button onClick={this.handleOpen}>Choose a City</Button>

                <Select
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={this.state.selectedCity}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'city',
                    id: 'select-city',
                  }}
                >
                  <MenuItem value="">
                    <em>All Cities</em>
                  </MenuItem>
                  {venueList.map(singleCity => (
                    <MenuItem value={singleCity}>{singleCity}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
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
