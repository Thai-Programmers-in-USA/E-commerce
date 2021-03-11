import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const quantity = [];
for (let i = 1; i <= 10; i++) {
  quantity.push(i);
}


const AddQuantityToCart = ({ product, classes }) => {
  return (
    <div className={classes.btnContainer}>
      <FormControl variant="outlined" className={classes.quantityContainer}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Quantity
        </InputLabel>
        <Select
          className={classes.btnSelect}
          native
          value={1}
          onChange={(e) => console.log(e.target.value)}
          label="Quantity"
          inputProps={{
            name: "Quantity",
            id: "outlined-age-native-simple",
          }}
        >
          {quantity.map((quantity, index) => (
            <option value={quantity} key={index}>
              {quantity}
            </option>
          ))}
        </Select>
      </FormControl>

      <Button
        className={classes.btnAddToCart}
        variant="contained"
        color="primary"
      >
        <Typography
          className={classes.btnAddToCartText}
          variant="subtitle2"
          component="p"
        >
          Add to cart
        </Typography>
      </Button>
    </div>
  )
};

const styles = ({ palette, breakpoints }) => ({
  btnContainer: { 
    marginTop: "20px",
    width: "100%",

    [breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  btnSelect: { 
    height: "37px",
    padding: "6px",

    [breakpoints.down("sm")]: {
      width: "110px",
      height: "47px",
    },
  },
  btnAddToCart: { 
    backgroundColor: palette.primary.main,
    width: "50%",
    textTransform: "capitalize",
    fontWeight: 700,
    marginLeft: "25px",
    marginBottom: "25px",

    [breakpoints.down("sm")]: {
      width: "300px",
      height: "47px",
      marginLeft: "10px",
    },
  },
  btnAddToCartText: { 
    [breakpoints.down("sm")]: {
      textTransform: "None",
      fontWeight: 600,
    },
  },
});

export default withStyles(styles)(AddQuantityToCart)
