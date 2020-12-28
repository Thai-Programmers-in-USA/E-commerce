import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  // TODO: align all contents to the left
  root: {
    backgroundColor: blueGrey,
  }
}));

const FeaturedCard = ({ featureData }) => {
  const classes = useStyles();
  // TODO: destructure style for a unique botton color
  const { data } = featureData;

  // TODO: make link button redirect to page
  return (
    <Card className={classes.root} >
      <h2>{ data.title }</h2>
      <p>{ data.desc }</p>
      <button>{ data.linkName }</button>
    </Card>
  )
}

FeaturedCard.propTypes = {
  featureData: PropTypes.object.isRequired,
};

export default FeaturedCard;