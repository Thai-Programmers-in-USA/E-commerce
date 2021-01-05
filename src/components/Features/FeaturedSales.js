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
    const saleStyleOptions = [
        {size: 12, card: 'default'},
        {size: 6, card: 'TR'},
        {size: 6, card: 'TR'}, 
    ]

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {saleStyleOptions.map((styleOption, idx) => (
                    <Grid item 
                        key={ featuredSaleData[idx].id }
                        xs={ styleOption.size } 
                    >
                        <FeaturedCard 
                            featureData={ featuredSaleData[idx] } 
                            featureStyle={ styleOption.card }
                        />
                </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedSales;
