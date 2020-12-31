import FeaturedCollection from "./FeaturedCollection"
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




const FeaturedCollectionSecond = ({classes}) => {

    return (
        <Card className={classes.bigContainer} variant="outlined">
            <div className={classes.leftContainer}>
                <img className={classes.img} src="https://cdn.shopify.com/s/files/1/2111/1121/products/Lenny_Wireless_Speaker_White_1000x1000.jpg?v=1569030648" />
            </div>
            <div className={classes.rightContainer}>
                <h1>Lenny Wireless Speaker</h1>
                <p>by Elipson</p>
                <p>$500.00 Current price is $375.00</p>
                <p>Color: White</p>
                <div className={classes.btnContainer}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={1}
                        onChange={(e)=> console.log(e.target.value)}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className={classes.btnAddToCart} variant="contained" color="primary">
                        <Typography className={classes.btnAddToCartText} variant="body2" component="p" gutterBottom>Add To Cart</Typography>
                    </Button>
                </div>
                <p>View full detail</p>
                <p>Share this</p>
            </div>
        </Card>
    )
} 

FeaturedCollectionSecond.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = ({palette, breakpoints}) => ({
    bigContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
    },
    rightContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    img: {
        width: "570px"
    },
    btnContainer: {
        marginTop: "30px"
    },
    btnQuantity: {
        color: palette.secondary.main,
        width: "15%",
        height: "39px",
        marginRight: "10px"
    },
    btnAddToCart: {
        backgroundColor: palette.primary.main,
        width: "60%"
    }

})

export default withStyles(styles)(FeaturedCollectionSecond)