import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CartPricing from '../Subscription/CartPricing';
import { Grid } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    },
    tabs: {
        backgroundColor: "#fff",
    },
    appBar: {
        boxShadow: "none",
        display: "flex",
        justifContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom : 50,
    },
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.down('md')]: {
        maxWidth: 960,
      }
        
    }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
        >
          <Tab label="ماهانه" {...a11yProps(0)} />
          <Tab label="سالانه" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid className={classes.wrapper}>
            <CartPricing title="پایه" price="78000"/>
            <CartPricing title="پریمیوم" price="104000"/>
            <CartPricing title="شرکتی" price="165000"/>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid className={classes.wrapper}>
            <CartPricing title="پایه" price="800000"/>
            <CartPricing title="پریمیوم" price="1100000"/>
            <CartPricing title="شرکتی" price="1500000"/>
        </Grid>
      </TabPanel>

    </Grid>
  );
}
