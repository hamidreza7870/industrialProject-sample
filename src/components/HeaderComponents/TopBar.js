import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneSharpIcon from '@material-ui/icons/LocalPhoneSharp';

const useStyles = makeStyles(theme => ({
    topbar: {
        width: "100%",
        padding: "20px 0",
        // position: "absolute",
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.primary.backgroundColor,
            padding: 15,
        }
    },
    container: {
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 15px",
        [theme.breakpoints.up('lg')]: {
            width: 1170
        },
        [theme.breakpoints.down('lg')]: {
            width: 1170
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            marginRight: 0,
            padding: 0,
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        },
    },
    row: {
        display: "contents",
        
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            alignItems: "center",
            width: "250px",
        },
    },
    topbarContactInfo: {
        display: "flex",
        marginTop: 5,
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap"
        }
    },
    infoRight: {
        display: "inline-block",
        paddingRight: 30,
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            minWidth: "100%"
        }
    },
    iconLocation: {
        fontSize: "1.6rem",
        color: theme.palette.secondary.main,
        position: "absolute",
        right: 0,
        top: -7
    },
    columnLeft: {
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            justifyContent: "center",
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
        },
        [theme.breakpoints.down('xs')]: {
            margin: "25px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    locationText: {
        width: 220,
        fontSize: 13,
        color: theme.palette.secondary.main,
        lineHeight: "100%",
        margin: "0 0 .2em 0",
        [theme.breakpoints.down('sm')]: {
            color: "#fff"
        },
    },
    infoLeft: {
        display: "inline-block",
        marginRight: 35,
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            minWidth: "100%",
            marginTop: 15,
            marginRight: 0,
        }
    },
    phoneicon: {
        fontSize: "1.2rem",
        color: theme.palette.secondary.main,
        position: "absolute",
        right: 0,
        top: -7
    },
    phoneText: {
        width: 170,
        fontSize: 13,
        color: theme.palette.secondary.main,
        lineHeight: "100%",
        margin: "0 0 .2em 0",
        [theme.breakpoints.down('sm')]: {
            color: "#fff"
        },
    },
    linkQuote: {
        textDecoration: "none",
    },
    btnqoute: {
        "&:hover": {
            backgroundColor: "black",
            color: "#fff",
            transition: ".4s"
        },
    },
}))

export default function TopBar() {
    const classes = useStyles();
    return (
        <Grid className={classes.topbar}>
            <Grid className={classes.container} container >
                <Grid className={classes.row}>
                    <Grid container item sm={8} xs={8} className={classes.columnRight}>
                        <Grid className={classes.topbarContactInfo}>
                            <Grid className={classes.infoRight}>
                                <LocationOnIcon className={classes.iconLocation} />
                                <Typography variant="body1" className={classes.locationText}>ایران، تهران بزرگ، تهران، میدان آزادی</Typography>
                            </Grid>
                            <Grid className={classes.infoLeft}>
                                <LocalPhoneSharpIcon className={classes.phoneicon} />
                                <Typography variant="body1" className={classes.phoneText}>+989121234567</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item sm={4} xs={12} className={classes.columnLeft}>
                        <Grid className={classes.getQuote}>
                            <Link to="/services" className={classes.linkQuote}>
                                <Typography className={classes.btnqoute} variant="button" >مشاوره</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
