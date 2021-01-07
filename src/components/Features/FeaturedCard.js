import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';

const defaultStyles = {
  root: {
    // height: "260px",
    backgroundColor: "teal"
    
  },
  cardContentStyle: {
    marginBottom: "25px",
    // height: "100%",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left"
  },
  typographyStyles: {
    color: "white"
  },
  btnStyles: {
    color: "white", 
    backgroundColor: "red",
    width: "80%"
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
    color: "red", 
    backgroundColor: "white"
  }
}

const contentCenter = {
  cardContentStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0",
    textAlign: "center"
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
      // const contentStyle = {
      //   cardContentStyle: {
      //     ...defaultStyles.cardContentStyle, 
      //     ...contentCenter.cardContentStyle
      //   }
      // };
      return {
        ...defaultStyles,
        // ...contentStyle
        cardContentStyle: {
          ...defaultStyles.cardContentStyle, 
          ...contentCenter.cardContentStyle
        }
      };
    default:
      return defaultStyles
  }
}

const FeaturedCard = ({ featureData, featureStyle }) => {
  // passin props style
  const featuredCardStyles = styleGenertor(featureStyle);
  const useStyles = makeStyles(featuredCardStyles);
  const classes = useStyles();
  const { data } = featureData;
  const bgImage = {  
    backgroundImage: `url(${data.imgURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    // backgroundAttachment: "fixed"
  }
  
  // TODO: make link button redirect to page
  return (
    <Card style={bgImage} className={classes.root}>
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