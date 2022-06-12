import React from 'react';
import { Grid , Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Cart.css";

const useStyles = makeStyles(theme => ({
    grid: {
        overflow:"hidden",
        width: "calc(33.33% - 30px)",
        margin: "0 15px 30px",
        [theme.breakpoints.down('md')]: {
            minWidth:"50%"
        },
        [theme.breakpoints.down('sm')]: {
            minWidth:"100%"
        },
    },
    image: {
        maxWidth: "100%",
        height:"auto"
    },
    
}))

export default function CartGrid({img , title, desc}) {
    const classes = useStyles();
    return (
        <Grid container item className={classes.grid} >
            <Grid className="row">
                <Grid className="projectImage" >
                    <img src={img} alt="imageProject" className={classes.image} />
                </Grid>
                <Grid className="projectInfo">
                    <Grid className="innerInfo">
                        <Link to="/projects" className="linkProject">
                            <Typography variant="h3" className="titleProject">{title}</Typography>
                            <Typography variant="body1" className="descProject">{desc}</Typography>
                        </Link>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}