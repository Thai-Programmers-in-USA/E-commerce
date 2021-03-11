import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme/theme";
import withStyles from "@material-ui/core/styles/withStyles";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail"

function App({ classes }) {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.container}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:slug" component={ProductDetail} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter> 
    </MuiThemeProvider>
  );
}

const styles = ({ palette, breakpoints, spacing, typography }) => ({
  container: {
    margin: 0,
    padding: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    [breakpoints.up("sm")]: {
      width: "70%",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
    },
    [breakpoints.up("md")]: {
      width: "90%",
      padding: "20px",
    },
    [breakpoints.up("lg")]: {
      width: "80%",
    },
  },
});

export default withStyles(styles)(App);
