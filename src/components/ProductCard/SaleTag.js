import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const SaleTag = ({classes, discount}) => {
    console.log(discount)
    return(
        <Typography variant="body2" className={classes.discountText}>Save ${discount}</Typography>
    )
}

const styles = ({palette, breakpoints}) => ({
    discountText: {
        fontSize: "13px",
        color: "white",
        fontWeight: 600,
        backgroundColor: palette.primary.main,
        alignSelf: "flex-start",
        padding: "3px 5px",
        marginRight: "15px",
        marginBottom: "10px"
    }
})

export default withStyles(styles)(SaleTag)