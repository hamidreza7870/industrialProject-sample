import React from 'react';
import { Grid} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import GridItem from './GridItem';
import { Link } from 'react-router-dom';
import gridImage1 from "../../assets/images/img-1.jpg"
import gridImage2 from "../../assets/images/img-2.jpg"
import gridImage3 from "../../assets/images/img-3.jpg"
import gridImage4 from "../../assets/images/img-4.jpg"
import gridImage5 from "../../assets/images/img-5.jpg"
import gridImage6 from "../../assets/images/img-6.jpg"

const useStyles = makeStyles(theme => ({
    serviceGride: {
        padding: "100px 0",
        backgroundColor :"#fff"
    },
    container: {
        display: "flex",
        paddingLeft:15,
        paddingRight:15,
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
    wrapper: {
        position: "relative",
        paddingRight: 15,
        paddingLeft:15
    },
    servicesGridView: {
        overflow: "hidden",
        margin: "0 -15px",
    },
    allServices: {
        textAlign: "center",
        paddingTop: 3,
    },
    LoadMore: {
        backgroundColor:theme.palette.secondary.main,
        fontSize: "1.06667rem",
        fontWeight: 600,
        color: theme.palette.primary.backgroundColor,
        padding: "5px 28px",
        border: "2px solid #fdc900",
        borderRadius: 3,
        textDecoration:"none"
    }
}))
export default function ServiceGride() {
    const classes = useStyles();
    return (
        <Grid container className={classes.serviceGride}>
            <Grid container className={classes.container}  >
                <Grid container className={classes.row}>
                    <Grid container item xs={12} direction="column" className={classes.wrapper}>
                        <Grid container className={classes.servicesGridView} >
                            <GridItem image={gridImage1} title="کارهای مکانیکی"/>
                            <GridItem image={gridImage2} title="انرژی و قدرت"/>
                            <GridItem image={gridImage3} title="پالایشگاه نفت"/>
                            <GridItem image={gridImage4} title="پتروشیمی"/>
                            <GridItem image={gridImage5} title="سوخت هسته ای"/>
                            <GridItem image={gridImage6} title="ساخت فلزات"/>
                        </Grid>
                        <Grid container justify="center" alignItems="center" className={classes.allServices}>
                            <Link to="/services" className={classes.LoadMore}>موارد بیشتر</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}