import React from 'react';
import { makeStyles, Grid, Hidden, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneSharpIcon from '@material-ui/icons/LocalPhoneSharp';
import LOGO2 from "../../assets/images/logo-2.png";
import Nav from '../Header/Nav';
import { Facebook, LinkedIn, Pinterest, RssFeed, Twitter } from '@material-ui/icons';
import MobileMenu from "../HeaderComponents/MobileMenu";

const useStyles = makeStyles(theme => ({
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
      maxWidth: 970
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      padding:"0 15px"
    },

  },
  row: {
    display: "contents",
    marginLeft: -15,
    marginRight: -15,
    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.down('xs')]: {
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      alignItems: "center",
    },
  },
  topbarContactInfo: {
    display: "flex",
    marginTop: 5,
    [theme.breakpoints.down('xs')]: {
      flexWrap: "wrap"
    }
  },
  infoRight: {
    display: "inline-block",
    paddingRight: 30,
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      minWidth: "100%"
    }
  },
  iconLocation: {
    fontSize: "1.6rem",
    color: theme.palette.secondary.main,
    position: "absolute",
    right: 0,
    top: -7
  },
  columnLeft: {
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down('xs')]: {
      margin: "25px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  locationText: {
    width: 220,
    fontSize: 13,
    color: theme.palette.secondary.main,
    lineHeight: "100%",
    margin: "0 0 .2em 0",
    [theme.breakpoints.down('sm')]: {
      color: "#fff"
    },
  },
  infoLeft: {
    display: "inline-block",
    marginRight: 35,
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      minWidth: "100%",
      marginTop: 15,
      marginRight: 0,
    }
  },
  phoneicon: {
    fontSize: "1.2rem",
    color: theme.palette.secondary.main,
    position: "absolute",
    right: 0,
    top: -7
  },
  phoneText: {
    width: 170,
    fontSize: 13,
    color: theme.palette.secondary.main,
    lineHeight: "100%",
    margin: "0 0 .2em 0",
    [theme.breakpoints.down('sm')]: {
      color: "#fff"
    },
  },
  header: {
    width: "100%",
    right: 0,
    top: 0,
    zIndex: -1,
  },
  topbar: {
    zIndex: 1,
    background: theme.palette.primary.backgroundColor,
    padding: "16px 0",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.backgroundColor,
      padding: "15px 0",
    }
  },
  FollowLink: {
    textDecoration: "none",
    verticalAlign: "middle",
  },
  iconLink: {
    color: "#fff",
    fontSize: ".9rem",
    marginRight: 15,
  },
  LowerToper: {
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "#fff",
      transition: ".4s",
      marginTop: -1

    }
  },
  follow: {
    fontSize: ".9333rem",
    color: theme.palette.secondary.main
  },
  getQuote: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: "auto"
    }
  },
  siteLogo: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      transition: ".4s",
    }
  },
  LogoSection: {
    display: "flex",
    flexWrap: "nowrap",
  },
  NavigatorSection: {
    [theme.breakpoints.down('sm')]: {
      transition: ".4s",
    },
    height: 65
  },
  containerNav: {
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
        maxWidth: 970
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      padding:"0 15px"
    },
  },
}))
export default function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Grid className={classes.topbar}>
        <Grid className={classes.container} container >
          <Grid className={classes.row}>
            <Grid container item sm={8} className={classes.columnRight}>
              <Grid className={classes.topbarContactInfoWrapper}>
                <Grid className={classes.topbarContactInfo}>
                  <Grid className={classes.infoRight}>
                    <LocationOnIcon className={classes.iconLocation} />
                    <Grid container className={classes.details} >
                      <Typography variant="body1" className={classes.locationText}>ایران، تهران بزرگ، تهران، میدان آزادی</Typography>
                    </Grid>
                  </Grid>
                  <Grid className={classes.infoLeft}>
                    <LocalPhoneSharpIcon className={classes.phoneicon} />
                    <Grid className={classes.details}>
                      <Typography variant="body1" className={classes.phoneText}>+989121234567</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item sm={4} className={classes.columnLeft}>
              <Grid className={classes.getQuote}>
                <span className={classes.follow}>دنبال کنید:</span>
                <Link to="/Services" className={classes.FollowLink}>
                  <Facebook className={classes.iconLink} />
                  <Twitter className={classes.iconLink} />
                  <LinkedIn className={classes.iconLink} />
                  <Pinterest className={classes.iconLink} />
                  <RssFeed className={classes.iconLink} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.NavigatorSection}>
        <Grid className={classes.containerNav} container >
          <Grid container className={classes.rowNav}>
            <Grid item sm={12} container justify="flex-start" alignItems="center" className={classes.LogoSection}>
              <Grid item container sm={2} md={3} className={classes.siteLogo} >
                <img src={LOGO2} alt="logoimage" className={classes.logoimage} />
              </Grid>
              <Hidden lgUp>
                <MobileMenu />
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Nav />
    </Grid>
  )
}
