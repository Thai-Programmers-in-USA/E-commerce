import React from 'react'
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


 const SearchBar =({classes}) => {
    return (
        <Typography variant="body1" component="p" className={classes.searchBar}>
        SearchBar
        </Typography>
    )
}

const styles = ({palette, breakpoints, spacing}) => ({
    searchBar: {
        flex:1,
        backgroundColor: "lightgrey",
        margin: '0 15px',
        display: 'none',
        [breakpoints.up('sm')]: {
            display: 'flex',
        }
    }
});


export default withStyles(styles)(SearchBar)
