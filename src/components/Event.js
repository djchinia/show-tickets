import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  // CardMedia,
} from '@material-ui/core';

const Event = props => {
  return (
    <div key={props.event.EventId}>
      {props.event && (
        <Card>
          {/* <CardMedia
            style={{ height: 0, paddingTop: '70%' }}
            image="https://img.vggcdn.net/img/cat/4508/1/37.jpg"
          /> */}
          <CardContent>
            <Typography component="p">
              {props.event.EventName} - {props.event.VenueCity}
            </Typography>
            <Typography component="p">{props.event.VenueName} </Typography>
            <Typography component="p">
              {props.event.Day}, {props.event.Date}
              {' @ '}
              {props.event.Time}
            </Typography>
            <CardActions style={{ justifyContent: 'center' }}>
              <br />
              <Button
                size="small"
                color="primary"
                variant="contained"
                href={'https://www.viagogo.com/' + props.event.EventUrl}
                target="_blank"
              >
                Buy Tickets
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Event;
