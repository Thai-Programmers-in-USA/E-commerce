import React, { useState, useEffect } from 'react'
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import RemoveIcon from '@material-ui/icons/Remove';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { DragHandleOutlined } from '@material-ui/icons';


const Footer = ({classes}) => {
  const isBigScreen = useMediaQuery('(min-width:970px)');
  const [isOpenCollapse, setIsOpenCollapse] = useState({nav: isBigScreen, cat: isBigScreen});
  
useEffect(() => {
   setIsOpenCollapse({nav: isBigScreen, cat: isBigScreen})
  
},[isBigScreen])

const handleCollapse = (section) => {
  if(!isBigScreen) {
    if(section === "nav") {
      setIsOpenCollapse({...isOpenCollapse, nav: !isOpenCollapse.nav})
    } else {
      setIsOpenCollapse({...isOpenCollapse, cat: !isOpenCollapse.cat})
    }
  }
}
    return (
      <div className={classes.footerContainer}>
        <div  className={classes.row}>
          <div className={classes.subRow} onClick={() => handleCollapse("nav")}>
            <button  className={classes.footerBtn} >Navigate
            </button>
            {isOpenCollapse.nav ? <RemoveIcon className={classes.dropdownIcon}/> : <KeyboardArrowDownIcon className={classes.dropdownIcon}/>}
            <Collapse in={isOpenCollapse.nav} timeout="auto" unmountOnExit>
            <ul style={{ listStyle: "none",  textAlign: 'left' }} className={classes.list}>
              <li>Home</li>
              <li>Catergory</li>
              <li>Brands</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            </Collapse>
          </div>
          <div className={classes.subRow} onClick={() => handleCollapse("cat")} >
            <button className={classes.footerBtn} >Category</button>
            {isOpenCollapse.cat ? <RemoveIcon className={classes.dropdownIcon}/> : <KeyboardArrowDownIcon className={classes.dropdownIcon}/>}
            <Collapse in={isOpenCollapse.cat} timeout="auto" unmountOnExit>
            <ul style={{ listStyle: "none",  textAlign: 'left' }} className={classes.list}>
              <li>Living</li>
              <li>Dining</li>
              <li>Office</li>
              <li>Bedroom</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
            </Collapse>
          </div>
          <div className={classes.subRowNoDropdown}>
            <button className={classes.footerBtn}>Follow us</button>
            <div className={classes.iconList}>
            <p>Icon</p>
            <p>Icon</p>
            <p>Icon</p>
            <p>Icon</p>
            <p>Icon</p>
            </div>
            
          </div>
          <div className={classes.subRowNoDropdown}>
            <button className={classes.footerBtn}>Subscribe</button>
            <Typography className={classes.textSubscribe} variant="subtitle1" component="p">Sign up to receive 15% off your first order!</Typography>
            <input className={classes.signUpInput}/>
            <input type="submit" value="sign up" className={classes.signUpBtn} />
          </div>
         
        </div>
        <div>
          <p>Copyright © 2020 Thi Programmer Group</p>
          <p>Powered by Shopify</p>
        </div>
      </div>  
    )
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = ({palette, breakpoints, spacing,typography}) => ({
  footerContainer: {
    width: '100%',
    position: 'absolute',
    top: 400,
    padding: '20px',
    color:'#4d4d4d',
   
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      }
},
footerBtn:{
  border: 'none',
  paddingBottom: '10px',
  backgroundColor: 'transparent', 
  fontSize: '1.5rem',
  fontWeight: 600,
  color:'#4d4d4d;',
  fontSize: '1.2rem'
},
list: {
    textAlign: 'left',
    padding: '5px 10px'
},
list: {
'& li': {
  listStyle: 'none',
}
},
iconList: {
  display: 'flex',
    flexDirection: 'row'
},
subRow: {
  [breakpoints.down('sm')]: {
   textAlign: 'left',
   marginRight: '60px',
   borderBottom: 'solid 2px #f5f5f5',
    }
},
subRowNoDropdown: {
textAlign: 'left'
},
dropdownIcon: {
  display: 'none',
  [breakpoints.down('sm')]: {
   position:'absolute',
   right: 10,
   display: 'inline',
    }
},
signUpInput: {
  marginTop: '10px',
  lineHeight: '1.15',
  border: '1px solid #dddddd',
  borderRadius: '3px',
  color: '#4d4d4d',
  fontWeight: 400,
  padding: '1.5rem 0.625rem 0.375rem',
  width: '80%'

},
signUpBtn: {
  backgroundColor: palette.primary.main,
  color: '#ffffff',
  border: 'none',
  borderRadius: '3px',
  padding: '15px 20px',
  fontSize: '1rem',
  marginTop: '10px',
  display: 'block'
},
textSubscribe: {
  width: '90%'
}
});

export default withStyles(styles)(Footer)