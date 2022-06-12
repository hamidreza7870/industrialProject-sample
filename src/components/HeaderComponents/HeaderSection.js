import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import slider3 from "../../assets/images/slide3.jpg";
import TopBar from './TopBar';
import TextHeader from './TextHeader';
import Navigator from './Navigator';

const useStyles = makeStyles(theme => ({
  header: {
    position: "relative",
    right: 0,
    top: 0,
    zIndex: 1,
    minHeight: "600px",
    maxHeight: "100vh",
    "&::before": {
      content: "''",
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      width: "100%",
      height: "100%",
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: -1
    }
  },
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up('lg')]: {
      width: 1170
    },
    [theme.breakpoints.down('lg')]: {
      width: 1170
    },
    [theme.breakpoints.down('md')]: {
      width: 970
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
  },
  row: {
    marginLeft: -15,
    marginRight: -15,
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      alignItems: "center",
    },
    [theme.breakpoints.down('xs')]: {
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      alignItems: "center",
    },
  },

}))

export default function HeaderSection() {
  const classes = useStyles();
  return (
    <Grid className={classes.header} style={{ backgroundImage: `url(${slider3})`, backgroundPosition: "center center", backgroundSize: "cover" }}>
      <Grid className={classes.container} >
        <Grid className={classes.row}>
          <TopBar />
          <Navigator />
          <TextHeader />
        </Grid>
      </Grid>
    </Grid>
  )
}


