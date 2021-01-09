import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';

const defaultStyles = {
  root: {
    // height: "260px",
    borderRadius: 0
  },
  cardContentStyle: {
    marginBottom: "25px",
    // height: "100%",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left"
  },
  typographyStyles: {
    color: "white"
  },
  _typoTitleStyles: {
    fontWeight: "700"
  },
  _typoDesceStyles: {
    fontSize: "12px"
  },
  _typoBtnStyles: {
    fontSize: "12px"
  },
  btnStyles: {
    textTransform: "capitalize",
    fontWeight: "600"
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
    backgroundColor: "white",
    textTransform: "capitalize"
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
      return {
        ...defaultStyles,
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
          className={`${classes.typographyStyles} ${classes._typoTitleStyles}`} 
          component="h2"
        >
          { data.title }
        </Typography>
        <Typography 
          className={`${classes.typographyStyles} ${classes._typoDesceStyles}`} 
          component="p" 
        >
          { data.desc }
        </Typography>
        <Button 
          className={`${classes.btnStyles} ${classes._typoDesceStyles}`}
          variant="contained" 
          color="primary"
        >
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