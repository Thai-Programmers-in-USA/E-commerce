import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../SearchBar';


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

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
    container: {
        width: '100%'
    },
    headerTopContainer: {
        display: "flex",
        justifyContent:'space-between'
    },
};

export default withStyles(styles)(Header)