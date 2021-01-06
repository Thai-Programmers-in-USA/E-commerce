import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import { SiPinterest } from "react-icons/si";
import { FaTwitterSquare, FaFacebook, FaLinkedin} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const Icon = ({classes}) => {
    return(
        <div>
            <ul className={classes.iconContainer}>
                <li className={classes.icon}><FaFacebook color='#435DAB' size='16px'/></li>
                <li className={classes.icon}><AiFillTwitterCircle color='#0077B5' size='20px'/></li>
                <li className={classes.icon}><FaLinkedin color='#0077B5' size='16px' /></li>
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
    }

})

export default withStyles(styles)(Icon)