import React from 'react'
import ProductCard from '../ProductCard'
import productData from '../ProductCard/ProductData'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


 const FeaturedCollection = ({classes}) => {


    return (
        <div className={classes.container}>
            <Typography variant="subtitle2" component="p" className={classes.title}>Featured Collection</Typography>
            <div className={classes.cardsContainer}>
                {productData.map((product, index) => 
                    <ProductCard product={product} key={index} />
                )}
            </div>
            <p>big container</p>
        </div>

    )
}

const styles = ({palette, breakpoints}) => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cardsContainer: {
        display: "flex"
    },
    title: {
        fontWeight: 700,
        color: palette.primary.secondary
    }
})

export default withStyles(styles)(FeaturedCollection);