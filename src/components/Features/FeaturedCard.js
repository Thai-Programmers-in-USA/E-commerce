import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { blueGrey } from '@material-ui/core/colors';


const useStyles = makeStyles({
  // TODO: align all contents to the left
  // root: {
  //   backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-furniture-websites-joybird-1506629308.jpeg')`,
  
  // }
  root: props => ({
    // backgroundImage: `url(${props.bgImg})`,
    backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-furniture-websites-joybird-1506629308.jpeg')`,
    // backgroundSize: "cover"
  })

});

const FeaturedCard = ({ featureData }) => {
  
  // TODO: destructure style for a unique botton color
  const { data } = featureData;
  const classes = useStyles( {bgImg: data.imgURL} );
  const bgImage = {  
    // backgroundImage: `url('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')`,
    backgroundImage: `url(${data.imgURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundPosition: "center center",
    // backgroundAttachment: "fixed"
    
  }
  console.log("data-img",data.imgURL , data)

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