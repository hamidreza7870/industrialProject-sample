import React from 'react';
import { Grid , Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import BuildIcon from '@material-ui/icons/Build';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import Cart from './Cart';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
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
    featuresTitle: {
        border: "2px solid #fdc900",
        padding: "45px 30px",
        borderRadius: 5,
        [theme.breakpoints.down('md')]: {
            padding: "25px 20px",
            marginBottom: 40,
        }
    },
    title: {
        color: theme.palette.primary.backgroundColor,
        textAlign: "right",
        marginBottom: ".9em",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.666rem",
        }
    },
    desc: {
        color: theme.palette.text.secondary,
        textAlign: "right",
        [theme.breakpoints.down('md')]: {
            fontSize : 15,
            
        }
    },
    featureGrid: {
        textAlign: "center",
    },
    wrapper: {
        paddingLeft: 15,
        paddingRight : 15
    },
    icons: {
        backgroundColor: theme.palette.secondary.main,
        width: 90,
        height: 90,
        lineHeight: 90,
        textAlign: "center",
        margin : "0 auto",
        borderRadius: "50%",
        color: "#000",
        padding: 15,
        [theme.breakpoints.down('lg')]: {
            width: 75,
        height: 75,
        lineHeight: 75,
        },
        [theme.breakpoints.down('md')]: {
            width: 60,
        height: 60,
        lineHeight: 60,
        },
    },
}))

export default function Features() {
    const classes = useStyles();
    return (
        <Grid container className={classes.featuresSection}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid item md={3} className={classes.wrapper}>
                        <Grid className={classes.featuresTitle}>
                            <Typography variant="h2" className={classes.title}>چرا ما بهترین هستیم</Typography>
                            <Typography variant="body1" className={classes.desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</Typography>
                        </Grid>
                    </Grid>
                    <Cart icon={<BuildIcon className={classes.icons} />} title="مهندسان متخصص" desc="چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی" />
                    <Cart icon={<LaptopChromebookIcon className={classes.icons} />} title="پشتیبانی حرفه ای" desc="چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی" />
                    <Cart icon={<AccessTimeIcon className={classes.icons} />} title="تحویل به موقع" desc="چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی" />
                </Grid>
            </Grid>
        </Grid>
    )
}
