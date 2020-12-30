import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';


const ProductCard = ({product, classes}) => {
    console.log(product);
    return (
        <div className={classes.container}>
            <img src={product.img} />
            <Typography className={classes.name} variant="body2" component="p" gutterBottom>
                {product.name}
            </Typography>
            <Typography className={classes.price} variant="body2" component="p" gutterBottom>
                {product.price}
            </Typography>
        </div>
    )
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
  };

const styles = ({palette,breakpoints}) => ({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    price: {
        color: palette.primary.main
    },
    name: {
        color: palette.secondary.main
    }
})
  

export default withStyles(styles)(ProductCard)