import React, { useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import RemoveIcon from "@material-ui/icons/Remove";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Button from '@material-ui/core/Button';
import { SiPinterest } from "react-icons/si";
import {FaFacebookF} from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";
import IconButton from '@material-ui/core/IconButton';
import {GrMail} from "react-icons/gr";
import TextField from '@material-ui/core/TextField';

const Footer = ({ classes }) => {
  const isBigScreen = useMediaQuery("(min-width:970px)");
  const [isOpenCollapse, setIsOpenCollapse] = useState({
    nav: isBigScreen,
    cat: isBigScreen,
  });
  const footerLinks = {
    navigate: [
      {
        name: 'Home',
        link: 'https://www.google.com'
      },
      {
        name: 'Category',
        link: 'https://www.google.com'
      },
      {
        name: 'Brands',
        link: 'https://www.google.com'
      },
      {
        name: 'About',
        link: 'https://www.google.com'
      },
      {
        name: 'Contact',
        link: 'https://www.google.com'
      },

    ],
    category: [
      {
        name: 'Living',
        link: 'https://www.google.com'
      },
      {
        name: 'Dining',
        link: 'https://www.google.com'
      },
      {
        name: 'Office',
        link: 'https://www.google.com'
      },
      {
        name: 'Bedroom',
        link: 'https://www.google.com'
      },
      {
        name: 'Kids',
        link: 'https://www.google.com'
      },
      {
        name: 'Sale',
        link: 'https://www.google.com'
      }

    ],
  }

  useEffect(() => {
    setIsOpenCollapse({ nav: isBigScreen, cat: isBigScreen });
  }, [isBigScreen]);

  const handleCollapse = (section) => {
    if (!isBigScreen) {
      if (section === "nav") {
        setIsOpenCollapse({ ...isOpenCollapse, nav: !isOpenCollapse.nav });
      } else {
        setIsOpenCollapse({ ...isOpenCollapse, cat: !isOpenCollapse.cat });
      }
    }
  };
  return (
    <div className={classes.footerContainer}>
      <div className={classes.row}>
        <div className={classes.subRow} onClick={() => handleCollapse("nav")}>
          <Typography className={classes.footerBtn}>Navigate</Typography>
          {isOpenCollapse.nav ? (
            <RemoveIcon className={classes.dropdownIcon} />
          ) : (
            <KeyboardArrowDownIcon className={classes.dropdownIcon} />
          )}
          <Collapse in={isOpenCollapse.nav} timeout="auto" unmountOnExit>
            <div
              style={{ listStyle: "none", textAlign: "left" }}
              className={classes.list}
            >
              { footerLinks.navigate.map((item, index) => 
              <Typography
              key={index}
              className={classes.listItems}
              variant="subtitle1"
              component="p"
            >
             {item.name}
            </Typography>
              )}
          </div>
          </Collapse>
        </div>
        <div className={classes.subRow} onClick={() => handleCollapse("cat")}>
          <Typography className={classes.footerBtn}>Category</Typography>
          {isOpenCollapse.cat ? (
            <RemoveIcon className={classes.dropdownIcon} />
          ) : (
            <KeyboardArrowDownIcon className={classes.dropdownIcon} />
          )}
          <Collapse in={isOpenCollapse.cat} timeout="auto" unmountOnExit>
          <div
              style={{ listStyle: "none", textAlign: "left" }}
              className={classes.list}
            >
              { footerLinks.category.map((item, index) => 
              <Typography
              key={index}
              className={classes.listItems}
              variant="subtitle1"
              component="p"
            >
             {item.name}
            </Typography>
              )}
          </div>
          </Collapse>
        </div>
        <div className={classes.followUsContainer}>
          <Typography className={classes.footerBtn}>Follow us</Typography>
          <div className={classes.iconsContainer}>
                <IconButton className={classes.iconButton}>
                  <FaFacebookF className={classes.iconList} color='#686868' size='20px'/>
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <AiOutlineTwitter className={classes.iconList} color='#686868' size='20px'/>
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <SiPinterest className={classes.iconList} color='#686868' size='20px'/>
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <AiFillInstagram className={classes.iconList} color='#686868' size='20px'/>
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <GrMail className={classes.iconList} color='#686868' size='20px'/>
                </IconButton>
            </div>
        </div>
        <div className={classes.subscribeContainer}>
          <Typography className={classes.footerBtn}>Subscribe</Typography>
          <Typography
            className={classes.textSubscribe}
            variant="subtitle1"
            component="p"
          >
            Sign up to receive 15% off your first order!
          </Typography>
          <form className={classes.subscribeSignUpForm} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email address" variant="outlined" />
            <Button variant="contained" color="primary" className={classes.signUpBtn}>
              Sign up
            </Button>
          </form>
        </div>
      </div>
      <div className={classes.copyRigthDiv}>
        <p>Copyright © 2020 Thai Programmer Group</p>
        <p>Powered by Shopify</p>
      </div>
    </div>
  );
};
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = ({ palette, breakpoints, spacing, typography }) => ({
  footerContainer: {
    width: "100%",
    position: "absolute",
    top: "70%",
    padding: "20px",
    color: "#4d4d4d",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  footerBtn: {
    border: "none",
    padding: "10px 0",
    backgroundColor: "transparent",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#4d4d4d",
  },
  list: {
    textAlign: "left",
    padding: "5px 10px",
  },
  listItems: {
    
      listStyle: "none",
      fontSize: '14px',
      [breakpoints.up("sm")]: {
        fontSize: '16px',
    },
  
  },
  iconsContainer: {
    display: "flex",
    justifyContent: 'space-between',
    width:'70%'
  },
  subRow: {
    [breakpoints.down("sm")]: {
      textAlign: "left",
      borderBottom: "solid 1px #d3d3d3",
    },
  },
  followUsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
  },
  subscribeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottom: "solid 1px #d3d3d3",
  },
  dropdownIcon: {
    display: "none",
    [breakpoints.down("sm")]: {
      position: "absolute",
      right: 10,
      display: "inline",
    },
  },
  signUpInput: {
    marginTop: "10px",
    lineHeight: "1.15",
    border: "1px solid #dddddd",
    borderRadius: "3px",
    color: "#4d4d4d",
    fontWeight: 400,
    padding: "1.5rem 0.625rem 0.375rem",
    width: "80%",
    [breakpoints.down("sm")]: {
      width: "50%",
      marginRight: "10px",
    },
  },
  signUpBtn: {
    fontWeight: "600",
    textTransform: 'none',
    padding: "15px 20px",
  },
  textSubscribe: {
   textAlign: 'left',
   fontSize: '16px',
   marginBottom: '15px'
  },
  subIconList: {
    marginRight: "2%",
  },
  subscribeSignUpForm: {
    display: "flex",
    marginBottom: "10px",
    flexDirection: "column",
    alignItems : "flex-start"
  },
  copyRigthDiv: {
    position: "relative",
    bottom: "0",
  },
  iconButton: {
    backgroundColor: '#e6e6e6',
    padding: '4px'
  }
});

export default withStyles(styles)(Footer);
