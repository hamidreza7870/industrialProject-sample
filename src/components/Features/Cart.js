import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 15,
        paddingRight : 15
    },
    titleDetail: {
        color: theme.palette.primary.backgroundColor,
        textAlign: "center",
        marginBottom: ".3em",
        marginTop:35
    },
    desceDetail: {
        color: theme.palette.text.secondary,
        marginBottom : "1.7em",
        textAlign: "center",
        [theme.breakpoints.down('md')]: {
            fontSize :14
        }
    },
    linkDetails: {
        position : "relative",
        color: theme.palette.secondary.main,
        fontWeight: 800,
        textDecoration: "none",
        marginTop : 12
    },
    leftIcon: {
        position: "absolute",
        top: 1,
        fontSize: "1.3em",
    },
    featureGrid: {
        [theme.breakpoints.down('md')]: {
            width : "100%",
            marginBottom: 35,
            paddingBottom: 35,
            borderBottom: "1px solid #e6e3e3",
        }
    }
}))

export default function Cart({icon , title , desc}) {
    const classes = useStyles();
    return (
        <Grid item sm={4} md={3} className={classes.root}>
            <Grid className={classes.featureGrid}>
                    {icon}
                <Grid className={classes.details}>
                    <Typography variant="h3" className={classes.titleDetail}>{title}</Typography>
                    <Typography variant="body1" className={classes.desceDetail}>{desc}</Typography>
                    <Link to="" className={classes.linkDetails}>
                        جزئیات 
                        <KeyboardArrowLeftIcon className={classes.leftIcon}/>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}
