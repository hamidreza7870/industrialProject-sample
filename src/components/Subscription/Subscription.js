import React from 'react'
import ScrollableTabsButtonAuto from './Tabs'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display : "flex",
        padding : "100px 15px",
        marginLeft: "auto",
        marginRight: "auto",
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
    sectionTitle: {
        marginBottom: 35,
        textAlign: 'center',
        color: theme.palette.primary.backgroundColor,
        marginLeft : "auto",
        marginRight: "auto",
    },
    title: {
        margin: "0 auto 0.83em",
    },
    desc: {
        padding:"0 45px",
        color : theme.palette.text.secondary
    },
    SubscriptionSection: {
        backgroundColor: "#fff",
    }
}))

export default function Subscription() {
    const classes = useStyles()
    return (
        <Grid container className={classes.SubscriptionSection}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid container item md={8} className={classes.sectionTitle} >
                        <Typography variant="h2" className={classes.title} >تعرفه های ما</Typography>
                        <Typography variant="body1" className={classes.desc} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله</Typography>
                    </Grid>
                    <Grid className={classes.wrapperSection} container alignItems="center" justify="center">
                        <ScrollableTabsButtonAuto />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
