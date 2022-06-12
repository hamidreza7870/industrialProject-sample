import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    cart:{
        paddingRight: 45,
        position: "relative",
        listStyleType: "none",
        marginBottom : 50
    },
    icon:{
        backgroundColor: theme.palette.secondary.main,
        width: 35,
        height: 35,
        lineHeight: "38px",
        fontSize: "1.2rem",
        color: "#fff",
        textAlign: "center",
        position: "absolute",
        right: 0,
        top: 0,
        borderRadius: "50%",
    },
    details:{
        fontSize: "1.13333rem",
        fontWeight: "bold",
        lineHeight: "1.4em",
        color: theme.palette.primary.backgroundColor,
        margin: 0,
    },
    title:{
        display: "block",
        color: "#969fab",
        textAlign:"right"
    },
}))

export default function InfoCart({icon, title , desc}) {
    const classes = useStyles();
    return (
        <Grid container className={classes.cart}> 
            <Grid className={classes.icon}>
                {icon}
            </Grid>
            <Typography variant="body1" className={classes.details}>
                <span className={classes.title}>{title}</span>
                {desc}
            </Typography>
        </Grid>
    )
}
