import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const SectionTitle = ({ classes, title }) => {
  return (
    <Typography variant='subtitle2' component='p' className={classes.title}>
      {title}
    </Typography>
  );
};

const styles = ({ palette }) => ({
  title: {
    fontSize: 22,
    margin: '7% 0 2%',
    fontWeight: 800,
    color: palette.secondary.main,
  },
});

export default withStyles(styles)(SectionTitle);
