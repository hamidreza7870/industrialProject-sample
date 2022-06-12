import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import MultipleItems from './Slider';

const useStyles = makeStyles(theme => ({
    teamSection: {
        backgroundColor: "#f6f6f6",
        // paddingBottom: 170,
        paddingBottom: 150, 
        position:"relative"
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
        "&::before": {
            content: "''",
            width: "80%",
            height: 300,
            border: "2px solid #fdc900",
            position: "absolute",
            right: "10%",
            bottom: "22%",
        }
    },
    row: {
        marginLeft: -15,
        marginRight: -15,
    },
    wrapper: {
        marginRight: "16.66666667%",
        paddingRight: 15,
        paddingLeft:15
    },
    sectionTitle: {
        textAlign: "center",
        marginBottom :35
    },
    title: {
        color: theme.palette.primary.backgroundColor,
        margin: "0 0 0.83em",
        paddingBottom: "0.5em",
        "&::before": {
            content: "''",
            backgroundColor: theme.palette.secondary.main,
            width: 33,
            height: 5,
            position: "absolute",
            bottom: 0,
            borderRadius: 3,
            right: "50%",
            transform: "translateX(50%)",
        }
    },
    desc: {
        color:theme.palette.text.secondary
    }
}))
export default function Team() {
    const classes = useStyles();
    return (
        <Grid container className={classes.teamSection}>
            <Grid className={classes.container} container >
                <Grid container item direction="row" className={classes.row}>
                    <Grid className={classes.wrapper} container direction="column" item md={8}>
                        <Grid className={classes.sectionTitle}>
                            <Typography variant="h2" className={classes.title}>تیم ما</Typography>
                            <Typography variant="body1" className={classes.desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <MultipleItems />
            </Grid>
        </Grid>
    )
}
