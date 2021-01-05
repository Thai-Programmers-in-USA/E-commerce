import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: 260,
    // justify: "end"
  },
  cardContentStyle: {
    marginBottom: "25px"
  }
});

const FeaturedCard = ({ featureData }) => {
  const classes = useStyles();
  // TODO: destructure style for a unique botton color
  const { data } = featureData;
  const bgImage = {  
    backgroundImage: `url(${data.imgURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundPosition: "center center",
    // backgroundAttachment: "fixed"
    
  }
  
  // TODO: make link button redirect to page
  return (
    <Card style={bgImage} align="left" className={classes.root}>
      <CardContent className={classes.cardContentStyle}>
        <Typography variant="h5" component="h2">
          { data.title }
        </Typography>
        <Typography variant="subtitle2" component="p" >
          { data.desc }
        </Typography>
         <Button variant="contained" color="primary" size="small" >{ data.linkName }</Button>
      </CardContent>
    </Card>
  )
}

FeaturedCard.propTypes = {
  featureData: PropTypes.object.isRequired,
};

export default FeaturedCard;