import React from 'react';
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import Menu from './Menu';
import LOGO3 from "../../assets/images/logo-3.png";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles(theme => ({
  NavigatorSection: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "#020b12;",
      transition: ".4s",
    },
    height: 65
  },
  container: {
    display: "flex",
    // padding: "100px 15px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up('lg')]: {
      width: 1170
    },
    [theme.breakpoints.down('lg')]: {
      width: 1170
    },
    // [theme.breakpoints.down('md')]: {
    //     maxWidth: 970
    // },
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
  },
  row: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  siteLogo: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      transition: ".4s",
    }
  },
  LogoSection: {
    display: "flex",
    flexWrap: "nowrap"
  },
}))

export default function Navigator() {
  const classes = useStyles();
  return (
    <Grid container className={classes.NavigatorSection}>
      <Grid className={classes.container} container >
        <Grid container className={classes.row}>
          <Grid item sm={12} container justify="flex-start" alignItems="center" className={classes.LogoSection}>
            <Grid item container sm={2} md={3} className={classes.siteLogo} >
              <img src={LOGO3} alt="logoimage" className={classes.logoimage} />
            </Grid>
            <Hidden smDown>
              <Menu />
            </Hidden>
            <Hidden mdUp>
              <MobileMenu />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
