import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';




const ProductCard = ({product, classes}) => {
    console.log(product);
    return (
        <Card className={classes.card} variant="outlined">
            <img src={product.img} />
            <br></br>
            <br></br>
            <Typography className={classes.name} variant="body2" component="p" gutterBottom>
                {product.name}
            </Typography>
            <Typography className={classes.brand} variant="body2" component="p" gutterBottom>
                {product.brand}
            </Typography>
            <Typography className={classes.price} variant="body2" component="p" gutterBottom>
                {product.price}
            </Typography>
            <div className={classes.btnContainer}>
                <Button className={classes.btnQuickShop} variant="outlined">
                    <Typography className={classes.btnQuickShopText} variant="body2" component="p" gutterBottom>Quick shop</Typography>
                </Button>
                <Button className={classes.btnChooseOption} variant="outlined">
                    <Typography className={classes.btnChooseOptionText} variant="body2" component="p" gutterBottom>Choose options</Typography>
                </Button>
            </div>
        </Card>
    )
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

const styles = ({palette,breakpoints}) => ({
    card: {
        minWidth: "250px",
        maxWidth: "250px",
        height: 400,
    },
    price: {
        color: palette.primary.main,
        textAlign: "left",
        marginLeft: "5%"
    },
    name: {
        color: palette.secondary.main,
        textAlign: "left",
        marginLeft: "5%"
    },
    brand: {
        fontSize: "small",
        color: palette.secondary.light,
        textAlign: "left",
        marginLeft: "5%"
    },
    btnContainer: {
        marginTop: "30px",
        display: "flex"
    },
    btnQuickShop: {
        marginTop: "25px",
        padding: 0,
        width: "70%",
        height: "40px",
    },
    btnQuickShopText: {
        fontSize: "50%",
        textTransform: "lowercase",
        fontWeight: 500,
        color: palette.primary.main,
    },
    btnChooseOption: {
        marginTop: "25px",
        padding: 0,
        width: "70%",
        height: "40px",
    },
    btnChooseOptionText: {
        fontSize: "50%",
        fontWeight: 500,
        color: palette.primary.main,
    }
})
  

export default withStyles(styles)(ProductCard);
