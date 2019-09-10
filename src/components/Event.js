import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

const Event = props => {
  console.log(props);
  return (
    <div>
      {props.event && (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: '70%' }}
            image="https://img.vggcdn.net/img/cat/4508/1/37.jpg"
            title={props.event.EventName}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.event.EventName}
            </Typography>
            <Typography component="p">{props.event.VenueCity}</Typography>
            <Typography component="p">{props.event.VenueName} </Typography>
            <Typography component="p">
              {props.event.Day}, {props.event.Date}
              {' @ '}
              {props.event.Time}
            </Typography>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button
                size="small"
                color="primary"
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
