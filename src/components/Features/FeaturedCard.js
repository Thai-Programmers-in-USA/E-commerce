import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';

const defaultStyles = {
  root: {
    minHeight: 260,
    // justify: "end"
    backgroundColor: "teal"
  },
  cardContentStyle: {
    marginBottom: "25px"
  },
  typographyStyles: {
    color: "white"
  },
  btnStyles: {
    color: "white", // text
    backgroundColor: "red"
  }
}

const textGray = {
  typographyStyles: {
    color: "gray"
  }
}

const textRed = {
  typographyStyles: {
    color: "red"
  }
}

const btnWhite = {
  btnStyles: {
    color: "red", // text
    backgroundColor: "white"
  }
}

const contentCenter = {
  cardContentStyle: {
    align: "center" // **** not working
  }
}

const styleGenertor = (syleOption) => {
  switch (syleOption) {
    case 'TG':
      return {
        ...defaultStyles,
        ...textGray
      };
    case 'TR':
    return {
      ...defaultStyles,
      ...textRed
    };
    case 'BW':
    return {
      ...defaultStyles,
      ...btnWhite
    };
    case 'CT':
    return {
      ...defaultStyles,
      ...contentCenter
    };
    default:
      return defaultStyles
  }
}

const FeaturedCard = ({ featureData }) => {
  // passin props style
  const featuredCardStyles = styleGenertor();
  const useStyles = makeStyles(featuredCardStyles);
  const classes = useStyles();
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
        <Typography 
          className={classes.typographyStyles} 
          variant="h5" 
          component="h2"
        >
          { data.title }
        </Typography>
        <Typography 
          className={classes.typographyStyles} variant="subtitle2" 
          component="p" 
        >
          { data.desc }
        </Typography>
         <Button className={classes.btnStyles}>
          { data.linkName }
        </Button>
      </CardContent>
    </Card>
  )
}

FeaturedCard.propTypes = {
  featureData: PropTypes.object.isRequired,
};

export default FeaturedCard;