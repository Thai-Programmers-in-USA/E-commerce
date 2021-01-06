import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import { SiPinterest } from "react-icons/si";
import {FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineInstagram} from "react-icons/ai";


const Icon = ({classes}) => {
    return(
        <div>
            <ul className={classes.iconContainer}>
                <li className={classes.icon}><FaFacebook color='#435DAB' size='16px'/></li>
                <li className={classes.icon}><AiFillTwitterCircle color='#0077B5' size='20px'/></li>
                <li className={classes.icon}><AiOutlineInstagram className={classes.iconIg} color='#ffffff' size='20px' border-radius='50%'/></li>
                <li className={classes.icon}><SiPinterest color='#BD1C1B' size='16px' /></li>
            </ul>
        </div>
    )
}

const styles = ({palette, breakpoints}) => ({
    iconContainer: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        paddingRight: "10px"
    },
    iconIg: {
        backgroundImage: "linear-gradient(to bottom right, purple, red, purple)",
        borderRadius: "50%"
    }

})

export default withStyles(styles)(Icon)