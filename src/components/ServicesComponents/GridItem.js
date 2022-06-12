import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import "./GridItem.css"
const useStyles = makeStyles(theme => ({
    inner: {
        minHeight: 246,
        width:360,
        position: "relative",
        overflow: "hidden",
    },
    info: {
        position:"relative"
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: ".9333rem",
        fontWeight: 700,
    },
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.primary.backgroundColor,
        padding: 3,
        borderRadius: 3,
        fontSize:"2.2rem",
        position: "relative",
        right: -5,
        top: 12,
    },
    desc: {
        color: "#fff",
        textAlign: "right",
        margin: "0 0 1.79em",
        fontSize:".9333rem"
    },
    hiddenLink: {
        textDecoration:"none",
        fontWeight: 600,
        color: theme.palette.primary.backgroundColor,
        textTransform: "capitalize",
        textAlign: "right",
        marginLeft:"9.92rem"
    }
}))

export default function GridItem({image , title }) {
    const classes = useStyles();
    return (
        <Grid container item md={4} sm={6} xs={12} className="grid">
            <Grid className={classes.inner} style={{background : `url(${image})`,BackgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                <Grid className="details">
                    <Grid container className={classes.info}>
                        <Link to="/services" className={classes.link}>
                            <Typography variant="h3" className="titleService" >
                                <BuildIcon className={ classes.icon }/>
                                { title }
                            </Typography>
                            <Typography variant="body1" className={classes.desc}>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان</Typography>
                        </Link>
                        <Link to="/services" className={classes.hiddenLink}>دریافت جزئیات</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
