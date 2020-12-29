import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FeaturedCard from './FeaturedCard';
import featureCategoryData from '../../assets/staticData/featuredCategoryData';
// import imageUrl from '../../assets/img/home_page/living-room_1350x636.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#4d4d4d'
    }
}));

const FeaturedCategories = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {featureCategoryData.map(feature => (
                    <Grid item xs={ feature.itemSize } key={feature.data.title}>
                        <FeaturedCard featureData={ feature } />
                    </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedCategories;
