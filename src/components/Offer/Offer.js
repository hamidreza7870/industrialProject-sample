import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import offer from "../../assets/images/offer.jpg";

const useStyles = makeStyles(theme => ({
    offerSection: {
        // paddingBottom: 145,
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
            margin: "0 15px",
        },
    },
    row: {
        marginLeft: -15,
        marginRight: -15,
    },
    sectionTitle: {
        marginBottom : 30
    },
    textTop: {
        color: "#6a6a6a",
        textAlign: 'right',
        marginBottom : 15
    },
    textbottom: {
        color: "#6a6a6a",
        textAlign: 'right',
        marginBottom : 55
    },
    offerText: {
        paddingLeft: 30,
        [theme.breakpoints.down('sm')]: {
            paddingLeft : 0
        },
    },
    title: {
        paddingBottom : ".3em",
        textAlign : "right",
        color : theme.palette.primary.backgroundColor,
        "&::before": {
            content: "''",
            backgroundColor: "#fdc900",
            width: 80,
            height: 2,
            position: "absolute",
            right: 0,
            bottom: 0,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "1.6rem",
        }
    },
    boxBtn: {
      display : "flex"  
    },
    linkOffer: {
        textDecoration: "none",
        marginLeft: "1rem",
        [theme.breakpoints.down('sm')]: {
            marginLeft : "8px"
        },
    },
    offerBtn: {
        "&:hover": {
            backgroundColor: "black",
            color: "#fff",
            transition : ".4s",
        },
        [theme.breakpoints.down('md')]: {
            fontSize : "0.93333rem",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
            padding: "6px 12px",
            
        },
    },
    offerPic: {
        padding:"40px 0 0 100px",
        position: "relative",
        "&::after": {
            content: "''",
            width: 465,
            height: 465,
            border: "2px solid #fdc900",
            position: "absolute",
            right: 150,
            top: -22,
        }
    },
    imgOffer: {
        position: "relative",
        zIndex: 2,
        maxWidth: "100%",
        height: "auto",
    },
    imageContainer: {
        [theme.breakpoints.down('md')]: {
            display : "none"
        }
    },
    textContainer: {
        [theme.breakpoints.down("md")]: {
            minWidth: "100%",
        }
    }
}))
export default function Offer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.offerSection}>
            <Grid className={classes.container} container >
                <Grid container item direction="row" className={classes.row}>
                    <Grid container sm={5} item className={classes.textContainer} >
                        <Grid className={classes.sectionTitle}>
                            <Typography variant="h2" className={classes.title} >?????? ???????????? ???? ???? ?????????? ?????????? ?????????? ???? ???????? ?????? ?? ?????? ?????? ???????????? ????????</Typography>
                        </Grid>
                        <Grid className={classes.offerText}>
                            <Typography variant="body1" className={classes.textTop} >???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ?????? ?? ???? ?????????????? ???? ???????????? ???????????? ??????. ?????????????? ?? ???????? ???????? ?????????????? ?? ????????</Typography>
                            <Typography variant="body1" className={classes.textbottom} >???? ???????? ?? ?????????????????? ???? ???????? ?????? ?? ???????? ?????????? ???????? ???????????????? ???????? ???????? ?? ?????????????????? ?????????? ???? ?????? ?????????? ???????????????? ?????????????? ???? ????????.</Typography>
                            <Grid className={classes.boxBtn} container direction="row" >
                                <Link to="/services" className={classes.linkOffer}>
                                        <Typography className={classes.offerBtn} variant="button" >?????????? ????????????</Typography>
                                </Link>
                                <Link to="/services" className={classes.linkOffer}>
                                        <Typography className={classes.offerBtn} variant="button" >???????????? ????????</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container sm={7} className={classes.imageContainer} >
                        <Grid className={classes.offerPic} >
                            <img src={offer} alt="imageoffer" className={classes.imgOffer} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
