import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';




const ProductCard = ({product, classes}) => {
    console.log(product);
    return (
        <Card className={classes.cardContainer} variant="outlined">
                <img src={product.img} />
                <Typography className={classes.name} variant="body2" component="p" gutterBottom>
                    {product.name}
                </Typography>
                <Typography className={classes.price} variant="body2" component="p" gutterBottom>
                    {product.price}
                </Typography>
        </Card>
    )
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
  };

const styles = ({palette,breakpoints}) => ({
    cardContainer: {
        // display: "flex",
        // flexDirection: "column",
        minWidth: 275,
        height: 300
    },
    price: {
        color: palette.primary.main
    },
    name: {
        color: palette.secondary.main
    }
})
  

export default withStyles(styles)(ProductCard)
