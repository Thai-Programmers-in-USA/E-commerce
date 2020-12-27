import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './assets/theme/theme';
import withStyles from '@material-ui/core/styles/withStyles';

import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'

function App({classes}) {
  return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.container}>
          <Header />
            <Home />
          <Footer />
        </div>
      </MuiThemeProvider>

  );
}

const styles = ({palette, breakpoints, spacing,typography}) => ({
    container: {
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      
    }
});

export default withStyles(styles)(App)
