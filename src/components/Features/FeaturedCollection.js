import React from 'react'
import ProductCard from '../ProductCard'
import productData from '../ProductCard/ProductData'
import withStyles from '@material-ui/core/styles/withStyles';
import { FullscreenExit } from '@material-ui/icons';


 const FeaturedCollection = ({classes}) => {



    return (
        <div className={classes.container}>
            Featured Collection
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
    }
})

export default withStyles(styles)(FeaturedCollection);