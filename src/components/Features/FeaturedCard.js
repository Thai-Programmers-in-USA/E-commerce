import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: blueGrey
  }
}));

const FeaturedCard = () => {
  const classes = useStyles();

    return (
      <Card className={classes.root}>
        <h2>Title</h2>
            <p> 
              Discover the latest designer, modern and contemporary furniture and accessories from around the world.
            </p>
            <button>Click Me!</button>
      </Card>
    )
}

export default FeaturedCard;