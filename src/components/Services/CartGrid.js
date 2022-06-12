import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    grid: {
        padding: "0 15px 30px 15px",
        position: "relative",
        [theme.breakpoints.down('md')]: {
            minWidth: "50%"
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: "100%"
        },
    },
    inner: {
        position: "relative",
        overflow: "hidden",
    },
    imageHolder: {
        borderRadius: 5,
    },
    details: {
        backgroundColor: theme.palette.secondary.main,
        width: "100%",
        position: "absolute",
        right: 0,
        bottom: 0,
        borderRadius: 5,
        transition: "0.3s",
    },
    linkTitle: {
        display: "block",
        color: theme.palette.primary.backgroundColor,
        padding: "12px 18px",
        transition: "0.3s",
        textDecoration: "none",
        textAlign: 'right',
    },
    title: {
        [theme.breakpoints.down('md')]: {
            fontSize: 15
        }
    }
}))

export default function CartGrid({ img, title }) {
    const classes = useStyles();
    return (
        <Grid container item className={classes.grid} sm={4}>
            <Grid className={classes.inner}>
                <Grid className={classes.imageHolder}>
                    {img}
                </Grid>
                <Grid className={classes.details}>
                    <Link to="/services" className={classes.linkTitle}>
                        <Typography variant="h3" className={classes.title}>
                            {title}
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}
