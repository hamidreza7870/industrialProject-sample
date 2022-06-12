import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import imageTitle from "../../assets/images/pagetitle.jpg";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const useStyles = makeStyles(theme => ({
    PageTitle: {
        display:"flex",
        "&::before": {
            content: "''",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            width: "100%",
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
        }
    },
    container: {
        paddingLeft :15,
        paddingRight :15,
        marginLeft: "auto",
        marginRight: "auto",
        height: "100%",
        display: "table",
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
            width : 240
        },
    },
    row: {
        marginLeft: -15,
        marginRight: -15,
        verticalAlign: "middle",
        display: "table-cell",
    },
    title: {
        margin: "1em 0 0.23em",
        fontSize: "3.2rem",
        textAlign: "right",
        padding: "0 -15px",
        [theme.breakpoints.down('sm')]: {
            fontSize:"2.8rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"1.8rem"
        },
    },
    wrapper: {
        padding:"0 15px"
    },
    list: {
        listStyle: "none",
        zIndex: 1,
        position: "relative",
        display: "flex",
        padding: 0,
    },
    itemActive: {
        color: theme.palette.secondary.main,
        fontSize: "1.2rem",
        marginRight:30
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        marginLeft: 5,
        fontSize: "1.2rem",
        "&:hover": {
            color: theme.palette.secondary.main
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:"1rem"
        },
        
    },
    icon: {
        position: "absolute",
        right: 100,
        color: "#fff",
        top: "12%",
        [theme.breakpoints.down('sm')]: {
            right: 85,
        }
    }
}))

export default function PageTitle({title}) {
    const classes = useStyles();
    return (
    <Grid container className={classes.PageTitle} style={{position:"relative", background : `url(${imageTitle})` ,WebkitBackgroundSize:"cover", backgroundPositionX : "center" , backgroundPositionY : "center", backgroundRepeat:"no-repeat", height :"260px"}}>
        <Grid className={classes.container} container >
                <Grid container item  direction="column" className={classes.row}>
                    <Grid className={classes.wrapper}>
                        <Typography variant="h2" className={classes.title}>{title}</Typography>
                        <ol className={classes.list}>
                            <li className={classes.item}>
                                <Link className={classes.link} to="/">صفحه اصلی</Link>
                            </li>
                            <li className={classes.itemActive}>
                                <KeyboardArrowLeftIcon className={classes.icon}/> {title}
                            </li>
                        </ol>
                    </Grid>
                </Grid>
        </Grid>
    </Grid>
    )
}
