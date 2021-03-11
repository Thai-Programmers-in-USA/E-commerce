import React from "react";
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import SaleTag from "../ProductCard/SaleTag";
import SocialIcon from "../ProductCard/SocialIcon";
import AddQuantityToCart from '../AddQuantityToCart';

const color = ["White"];

const ProductDetailCard = ({ product, classes }) => {
  let discount = 0;
  let finalPrice = product.price.toFixed(2);
  if (product.isOnSale) {
    discount = product.price * (product.salePercentage / 100);
    finalPrice = product.price - discount;
  }

  return (
    <Card className={classes.bigContainer} variant="outlined">
      <div className={classes.leftContainer}>
        <img
          alt="white speaker"
          className={classes.img}
          src={product.img}
        />
      </div>
      <div className={classes.rightContainer}>
        <Typography className={classes.nameTitle} variant="subtitle2">
          {product.name}
        </Typography>
        <Typography className={classes.brand} variant="body2">
          {" "}
          by{" "}
          <a href="/" className={classes.link}>
            {product.brand}
          </a>
        </Typography>
        <div className={classes.priceContainer}>
          {product.isOnSale && (
            <>
              <SaleTag discount={discount.toFixed(2)} />

              <Typography
                className={classes.originalPrice}
                variant="body2"
                component="p"
              >
                ${product.price.toFixed(2)}
              </Typography>
            </>
          )}
          <Typography
            className={classes.finalPrice}
            variant="body2"
            component="p"
          >
            ${finalPrice}
          </Typography>
        </div>
        <Typography
          className={classes.chooseColor}
          variant="body2"
          component="p"
        >
          Color: {color}
        </Typography>

        <AddQuantityToCart />
        
        <Link to={`/product/${product.slug}`} className={classes.link}>
          <Typography className={classes.fullDetailText} variant="body2">
            View full detail
          </Typography>
        </Link> 

        <SocialIcon />
      </div>
    </Card>
  );
};

ProductDetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = ({ palette, breakpoints }) => ({
  bigContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    width: "100%",

    [breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [breakpoints.down("sm")]: {
      maxWidth: "50%",
    },
  },
  img: {
    maxWidth: "600px",

    [breakpoints.down("md")]: {
      maxWidth: "550px",
      marginTop: "30px",
    },
    [breakpoints.down("xs")]: {
      maxWidth: "450px",
    },
  },
  rightContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "65px",

    [breakpoints.down("sm")]: {
      width: "50%",
    },
    [breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  nameTitle: {
    fontSize: 27,
    fontWeight: 900,
    color: palette.secondary.main,

    [breakpoints.down("sm")]: {
      fontSize: 23,
      fontWeight: 900,
    },
  },
  brand: {
    color: palette.secondary.light,
    marginTop: "8px",

    [breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  chooseColor: {
    marginTop: "16px",
    fontSize: 13,
    fontWeight: 600,

    [breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  fullDetailText: {
    [breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
  textDiscount: {
    textDecoration: "line-through",
  },
  priceContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  originalPrice: {
    color: palette.secondary.light,
    textAlign: "left",
    textDecoration: "line-through",
    marginRight: "15px",
    fontSize: 20,
    fontWeight: 400,
  },
  finalPrice: {
    color: palette.primary.main,
    textAlign: "left",
    fontSize: 20,
    fontWeight: 400,
  },
  link: {
    color: palette.primary.main,
  },
});

export default withStyles(styles)(ProductDetailCard);
