import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';


const FeaturedCard = ({ featureData }) => {
  
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
    <Card style={bgImage}>
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