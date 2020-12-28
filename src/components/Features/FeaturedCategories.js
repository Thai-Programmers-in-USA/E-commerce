import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedCard from './FeaturedCard';
import imageUrl from '../../assets/img/home_page/living-room_1350x636.jpg'

const featuredData = [
    {
        itemSize : 8,
        itemStyle: '',
        data: {
            title: '800+ New Arraival',
            desc: 'Discover the latest designer, modern and contemporary furniture and accessories from around the world.',
            imgURL: '',
            linkName: 'Shop New Arrivals',
            linkURL: ''
        }
    },
    {
        itemSize : 4,
        itemStyle: '',
        data: {
            title: 'Diner Party Ready',
            desc: 'Impress your guests with our fashionable, functional dining sets and tableware.',
            imgURL: '',
            linkName: 'Shop Dining',
            linkURL: ''
        }
    },
    {
        itemSize : 4,
        itemStyle: '',
        data: {
            title: 'Mid-Summer Upholstery Sale',
            desc: 'Up to 50% off every sofa and every chair, in every fabric or every leather.',
            imgURL: '',
            linkName: 'Shop Sale',
            linkURL: ''
        }
    },
    {
        itemSize : 8,
        itemStyle: '',
        data: {
            title: 'Ligh Up the Room',
            desc: 'Featuring the latest looks in modern lighting, our curated  interior lighting can help transform the rooms in your home.',
            imgURL: '',
            linkName: 'Shop Lighting',
            linkURL: ''
        }
    }
];

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
                {featuredData.map(feature => (
                    <Grid item xs={ feature.itemSize }>
                    <FeaturedCard featureData={ feature } />
                </Grid>
                ))}
            </Grid> 
        </div>
    )
}

export default FeaturedCategories;
