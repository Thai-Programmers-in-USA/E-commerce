import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
                <div> 
                    <p className={classes.textDiscount}>$500.00</p> 
                    <p>$375.00</p>
                </div>
                <p>Color: White</p>
                <div className={classes.btnContainer}>
                    <FormControl className={classes.formControl}>
                        <Button className={classes.btnQuantity}>
                        <InputLabel  id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                            className={classes.selectDropDown}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={1}
                            onChange={(e)=> console.log(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10+</MenuItem>
                        </Select>
                        </Button>
                    </FormControl>
                    <Button className={classes.btnAddToCart} variant="contained" color="primary">
                        <Typography className={classes.btnAddToCartText} variant="subtitle2" component="p" gutterBottom>Add To Cart</Typography>
                    </Button>
                </div>
                <a href="/" className={classes.link}>
                    <Typography variant="body2">View full detail</Typography>
                </a>
                <Typography className={classes.shareText} variant="subtitle2">share this:</Typography>
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
    textDiscount: {
        textDecoration: "line-through"
    },
    btnContainer: {
        marginTop: "30px"
    },
    btnQuantity: {
        color: palette.secondary.main,
        width: "30%",
        height: "39px",
        marginRight: "10px",
        textTransform: "capitalize"
    },
    selectDropDown: {
        paddingRight: "35px",
        padding: 0
    },
    btnAddToCart: {
        marginBottom: "30px",
        backgroundColor: palette.primary.main,
        width: "60%",
        textTransform: "capitalize",
        fontWeight: 700
    },
    link: {
        color: palette.primary.main,
    },
    shareText: {
        fontSize: "12px",
        fontWeight: 600
    }
    
})

export default withStyles(styles)(FeaturedCollectionSecond)