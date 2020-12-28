import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedCard from './FeaturedCard';

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
                 <Grid item xs={8}>
                    <FeaturedCard />
                </Grid>
                <Grid item xs={4}>
                    <FeaturedCard />
                </Grid>
                <Grid item xs={4}>
                    <FeaturedCard />
                </Grid>
                <Grid item xs={8}>
                    <FeaturedCard />
                </Grid>
            </Grid> 
        </div>
    )
}

export default FeaturedCategories;
