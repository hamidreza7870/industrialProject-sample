import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const navLinks = [
    {id:0, title: `صفحه اصلی`, path: `/` },
    {id:1, title: `خدمات`, path: `/services` },
    {id:2, title: `درباره`, path: `/about` },
    {id:4, title: `پروژه ها`, path: `/Projects` },
    {id:5, title: `بلاگ`, path: `/blog` },
    {id:3, title: `تماس`, path: `/contact` },
]

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        zIndex: 10,
        transition: "all 0.7s",
        width:"100%",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('md')]: {
            display: "none",
        }
    },
    navDisplayFlex: {
        display: "flex",
        margin: "auto",
    },
    linkText: {
      textDecoration: "none",
      color: theme.palette.primary.backgroundColor,
    },
    itemMenu: {
        fontWeight: 600,
        fontSize: "1rem",
        padding : "11px 15px",
    },
    listMenu: {
        textDecoration : "none",
        transition: ".3s",
        color : theme.palette.primary.backgroundColor,
        "&:hover": {
            color: "#fff",
            backgroundColor : "transparent"
        }
    },
    container: {
        display : "flex",
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.up('lg')]: {
            width : 1170
        },
    [theme.breakpoints.down('lg')]: {
        width : 1170
    },
    [theme.breakpoints.down('md')]: {
        width : 970
    },
    [theme.breakpoints.down('sm')]: {
        width : 750
    },
    },
    linkQuote: {
        textDecoration: "none",
    },
    btnqoute: {
        fontSize: "1.06rem",
        lineHeight: "50px",
        backgroundColor: "#020b12",
        color: "#fff",
        padding: "12.5px 45px 14px 45px;",
        border :0,
    },
}));
    

export default function NavStacky() {
    const classes = useStyles();
  return (
    <Grid className={classes.root}>
        <Grid container className={classes.container}>
            <Grid className={classes.navDisplayFlex} >
                {navLinks.map(({ title, path }) => (
                        <Link to={path} key={ title} className={classes.listMenu}>
                            <Typography className={classes.itemMenu}>{title}</Typography>
                        </Link>
                ))}
            </Grid>
            <Grid className={classes.Btn}>
                    <Grid className={classes.getQuote}>
                        <Link to="/Services/" className={classes.linkQuote}>
                            <Typography className={classes.btnqoute} variant="button">مشاوره</Typography>
                        </Link>
                    </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}