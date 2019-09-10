import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

const Event = props => {
  console.log(props);
  return (
    <div>
      {props.event && (
        <Card style={{ height: 240 }}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.event.Date}
            </Typography>
            <Typography component="p">{props.event.EventName}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={props.event.MinPrice}
              target="_blank"
            >
              Go To Event
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Event;
