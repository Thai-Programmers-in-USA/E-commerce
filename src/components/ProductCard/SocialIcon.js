import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { SiPinterest } from "react-icons/si";
import {FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineInstagram} from "react-icons/ai";


const SocialIcon = ({classes}) => {
    return(
        <div className={classes.container}>
            <Typography className={classes.shareText} variant="subtitle2">share this:</Typography>
            <ul className={classes.iconContainer}>
                <IconButton>
                    <li className={classes.icon}><FaFacebook color='#435DAB' size='20px'/></li>
                </IconButton>
                <IconButton>
                    <li className={classes.icon}><AiFillTwitterCircle color='#0077B5' size='24px'/></li>
                </IconButton>
                <IconButton>
                    <li className={classes.icon}><AiOutlineInstagram className={classes.iconIg} color='#ffffff' size='20px' border-radius='50%'/></li>
                </IconButton>
                <IconButton>
                    <li className={classes.icon}><SiPinterest color='#BD1C1B' size='20px' /></li>
                </IconButton>
            </ul>
        </div>
    )
}

const styles = ({palette, breakpoints}) => ({
    container: {
        marginTop: "15px"
    },
    iconContainer: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    iconIg: {
        backgroundImage: "linear-gradient(to bottom right, purple, red, purple)",
        borderRadius: "50%"
    },
    shareText: {
        marginTop: "30px",
        fontSize: "12px",
        fontWeight: 600
    }
})

export default withStyles(styles)(SocialIcon)