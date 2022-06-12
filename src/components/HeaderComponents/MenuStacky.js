import React from "react";
import { Toolbar, Container, Grid } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/logo-3.png";

const navLinks = [
  { id: 0, title: `صفحه اصلی`, path: `/` },
  { id: 1, title: `خدمات`, path: `/services` },
  { id: 2, title: `درباره`, path: `/about` },
  { id: 4, title: `پروژه ها`, path: `/Projects` },
  { id: 5, title: `بلاگ`, path: `/blog` },
  { id: 3, title: `تماس`, path: `/contact` },
]

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    zIndex: 10,
    transition: "all 0.7s",
    width: "100%",
    backgroundColor: "#0b3356",
    [theme.breakpoints.down('md')]: {
      display: "none",

    }
  },
  container: {
    display: "flex",
    padding: "6px 0",
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
      margin: "0 15px",
    },
  },
  navDisplayFlex: {
    display: 'flex',
    padding: "8px 120px 8px 0"
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  itemMenu: {
    paddingLeft: 20,
    paddingRight: 0,
    fontWeight: 600,
    fontSize: 1.3,
  },
  lisMenu: {
    transition: ".3s",
    "&:hover": {
      "&::before": {
        content: "''",
        backgroundColor: theme.palette.secondary.main,
        width: 10,
        height: 3,
        position: "absolute",
        right: "35%",
        transform: "translateX(50%)",
        bottom: 10,
        transition: ".3s",
      },
      color: theme.palette.secondary.main,
    }

  },
  siteLogo: {
    margin: 9,
    display: "flex",
    [theme.breakpoints.down('sm')]: {

      transition: ".4s",
      margin: "0 auto",
    }
  },
}));

const MenuStacky = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.root}>
        <div className={classes.container}>
          <Grid item container sm={4} className={classes.siteLogo} >
            <img src={logo} alt="logoimage" className={classes.logoimage} />
          </Grid>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button className={classes.lisMenu}>
                    <ListItemText className={classes.itemMenu} primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Container>
        </div>
      </Toolbar>
    </>
  )
}
export default MenuStacky;