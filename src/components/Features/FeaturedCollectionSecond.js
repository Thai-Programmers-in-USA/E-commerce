import FeaturedCollection from "./FeaturedCollection"
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';



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
        // backgroundColor: "red"
    },
    leftContainer: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "yellow"
    },
    rightContainer: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "blue"
    },
    img: {
        width: "50%"
    }
})

export default withStyles(styles)(FeaturedCollectionSecond)