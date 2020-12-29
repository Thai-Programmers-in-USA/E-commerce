import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FeaturedCard from './FeaturedCard';
import featuredSaleData from '../../assets/staticData/featuredSaleData';


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
                {featuredSaleData.map(feature => (
                    <Grid item xs={ feature.itemSize } key={feature.data.title}>
                    <FeaturedCard featureData={ feature } />
                </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedSales;
