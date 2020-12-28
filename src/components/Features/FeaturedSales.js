import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedCard from './FeaturedCard';

const featuredData = [
    {
        itemSize : 12,
        itemStyle: '',
        data: {
            title: 'Up to 30% Off',
            desc: `Select product in our 'Kids' collection`,
            imgURL: '',
            linkName: 'Shop Now',
            linkURL: ''
        }
    },
    {
        itemSize : 6,
        itemStyle: '',
        data: {
            title: 'Up to 50% Off',
            desc: 'Home Aceessories',
            imgURL: '',
            linkName: 'Shop Now',
            linkURL: ''
        }
    },
    {
        itemSize : 6,
        itemStyle: '',
        data: {
            title: 'Up to 25% Off',
            desc: 'Textiles & Rugs',
            imgURL: '',
            linkName: 'Shop Now',
            linkURL: ''
        }
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#fc0303'
    }
}));

const FeaturedSales = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {featuredData.map(feature => (
                    <Grid item xs={ feature.itemSize }>
                    <FeaturedCard featureData={ feature } />
                </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedSales;
