import  createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e32619',
    },
    secondary: {
      main:'#4d4d4d',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1280,
  //     xl: 1920,
  //     tabletTen: 720,
  //   },
  // },
});

export default theme;