import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import SearchBar from '../SearchBar';
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography';

 const Header =({classes}) => {
    return (
        <div className={classes.container}>
        <div  className={classes.headerTopContainer}>
            <Typography variant="body" component="p">LOGO</Typography>
            <SearchBar />
            <Typography variant="body" component="p">Cart</Typography>
        </div>
      
        <NavBar />
        </div>
    )
}


const styles = {
    container: {
        width: '100%'
    },
    headerTopContainer: {
        width: '100%',
        display: "flex",
        justifyContent:'space-between'
    },
};

export default withStyles(styles)(Header)