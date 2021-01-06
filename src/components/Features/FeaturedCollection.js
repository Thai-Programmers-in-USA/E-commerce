import React from 'react'
import ProductCard from '../ProductCard'
import productData from '../ProductCard/productData'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FeaturedCollectionSecond from './FeaturedCollectionSecond'


 const FeaturedCollection = ({classes}) => {


    return (
        <div className={classes.container}>
            <Typography variant="subtitle2" component="p" className={classes.title}>Featured Collection</Typography>
            <div className={classes.cardsContainer}>
                {productData.map((product, index) => {
                    if(index !== productData.length-1)
                        return <ProductCard product={product} key={index} />
                }
                )}
            </div>
            <br></br>
            <br></br>
            <FeaturedCollectionSecond product={productData[productData.length-1]}/>
        </div>
    )
}

const styles = ({palette, breakpoints}) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column"
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginBottom: "2%",
        fontWeight: 700,
        color: palette.secondary.main
    }
})

export default withStyles(styles)(FeaturedCollection);