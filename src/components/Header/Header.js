import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../SearchBar';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

 const Header =({classes}) => {
    return (
        <div className={classes.container}>
        <div  className={classes.headerTopContainer}>
            <MenuIcon className={classes.menuIcon} />
            <Typography variant="body1" component="p" className={classes.logo}>EMPEROR</Typography>
            <SearchBar />
            <div className={classes.freeShippingAndCartContainer}>
            <div className={classes.freeShippingContainer}>
                <LocalShippingIcon className={classes.truckIcon} />
                <div className={classes.freeShippingTextContainer}>
                    <Typography variant="body1" component="p" className={classes.freeShipping}>Free Shipping</Typography>
                    <Typography variant="body1" component="p" className={classes.allOrders}>on all orders over $75</Typography>
                </div>
            </div>
            <ShoppingCartIcon className={classes.ShoppingCartIcon} />
            </div>
        </div>
        <NavBar />
        </div>
    )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = ({palette, breakpoints, spacing,typography}) => ({
    container: {
        width: '100%',
        [breakpoints.up('md')]: {
            width: '90%',
            maxWidth: '1400px'
        }
    },
    headerTopContainer: {
        display: "flex",
        justifyContent:'space-between',
        alignItems: 'center',
    },
    menuIcon: {
        display: 'in-line',
        [breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    logo: {
        color: palette.primary.main,
        fontWeight: '800',
        fontSize: '30px',
    },
    freeShippingAndCartContainer: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'flex-end',
    },
    freeShippingContainer: {        
        display: 'none',
        [breakpoints.up(680)]: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'flex-end',
        }
    },
    truckIcon: {
        fontSize: '40px',
        color: palette.secondary.main,
        [breakpoints.up('md')]: {
            fontSize: '45px',
        }
    },
    freeShippingTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        margin: '0 15px',
        color: palette.secondary.main,
    },
    freeShipping: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    allOrders: {
        fontSize: '13px',
    },
    ShoppingCartIcon: {
        fontSize: '35px',
        color: palette.secondary.main,
        [breakpoints.up('sm')]: {
            fontSize: '40px',
        },
        [breakpoints.up('md')]: {
            fontSize: '45px',
        }
    }
});

export default withStyles(styles)(Header)