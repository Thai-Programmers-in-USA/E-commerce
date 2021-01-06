import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const SaleTag = ({classes}) => {
    return(
        <div className={classes.container}>
            <Typography variant="body2" className={classes.discountText}>Save $6.00</Typography>
        </div>
    )
}

const styles = ({palette, breakpoints}) => ({
    container: {
        display: "flex",
        marginLeft: "5%",
        justifyContent: "center",
        alignItems: "center",
        width: "80px",
        height: "25px",
        backgroundColor: palette.primary.main,
    },
    discountText: {
        fontSize: "small",
        color: "white",
        fontWeight: 700
    }
})

export default withStyles(styles)(SaleTag)