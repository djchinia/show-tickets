import React, { Component } from 'react';
import { Grid, Select, MenuItem, FormControl, Button } from '@material-ui/core';
import Event from './Event';
import venueListMaker from '../utils/venueListMaker';
import venueObjFilter from '../utils/venueObjFilter';
import json from '../utils/eventlist';

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: json['Items'], // initialize with all events
      city: '',
      inputStr: '',
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    console.log(venueObjFilter('Houston'));
    const venueList = venueListMaker();

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
                  value={this.state.city}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'city',
                    id: 'select-city',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
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
