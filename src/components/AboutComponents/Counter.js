import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import GridCount from './GridCount';

const useStyles = makeStyles(theme => ({
    counter: {
        textAlign: "center",
        padding: "55px 0 100px",
    },
    container: {
        // display : "flex",
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
    second: {

    }
}))
export default function Counter() {
    const classes = useStyles();
    return (
        <Grid container className={classes.counter}>
            <Grid container className={classes.container}  >
                <Grid container item direction="row" justify="space-between" className={classes.row}>
                    <GridCount title1="+" title2="1200" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان" fact="پروژه ها" />
                    <GridCount title1="+" title2="800" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان" fact="مشتری" />
                    <GridCount title1="%" title2="99" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان" fact="رضایتمندی" />
                </Grid>
            </Grid>
        </Grid>
    )
}