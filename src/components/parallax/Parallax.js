import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import cta from "../../assets/images/cta.jpg";



const useStyles = makeStyles(theme => ({
    parallaxSection: {
        position: "relative",
        textAlign: "center",
        backgroundSize: "cover",
        "&::before": {
            content: "''",
            backgroundColor: "rgba(5, 24, 41, 0.9)",
            width: "100%",
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
        }
    },
    container: {
        display : "flex",
        padding : "100px 15px",
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
    row: {
        marginLeft: -15,
        marginRight: -15,
        
    },
    boxText: {
        display: "flex",
        flexDirection: "column",  
    },
    PXBtn: {
        backgroundColor: "transparent",
        border: "2px solid #fdc900",
        color: "#fff",
        transition : ".3s",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            transition : ".3s"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize : 13
        },
    },
    titlePX: {
        margin: "auto",
        marginBottom: "1.33em",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.3rem"
        },
    },
    linkPX: {
        zIndex: 1,
        textDecoration : "none",
    }
}))

export default function Parallax() {
    const classes = useStyles();
    return (
        <Grid container className={classes.parallaxSection} style={{backgroundImage : `url(${cta})` , backgroundPosition: "50% -19.58px"}}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid sm={12} item container className={classes.boxText}>
                        <Typography variant="h2" className={classes.titlePX}>اولویت اول ما <span style={{color : "#fdc900"}}>رضایت مشتری</span> است</Typography>
                        <Link to="/services" className={classes.linkPX} >
                            <Typography className={classes.PXBtn} variant="button" >دریافت مشاوره</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
