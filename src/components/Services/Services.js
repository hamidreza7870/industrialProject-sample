import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import CartGrid from './CartGrid';
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import img4 from "../../assets/images/img4.jpg"
import img5 from "../../assets/images/img5.jpg"
import img6 from "../../assets/images/img6.jpg"
const useStyles = makeStyles(theme => ({
    servicesSection: {
        backgroundColor: "#e8f0f7",
    },
    container: {
        display: "flex",
        padding: "100px 15px",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.up('lg')]: {
            width: 1170
        },
        [theme.breakpoints.down('lg')]: {
            width: 1170
        },
        [theme.breakpoints.down('md')]: {
            width: 970
        },
        [theme.breakpoints.down('sm')]: {
            width: 750
        },
    },
    row: {
        marginLeft: -15,
        marginRight: -15,
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    sectionTitle: {
        marginBottom: 35,
        textAlign: 'center',
        color: theme.palette.primary.backgroundColor,
        marginLeft: "auto",
        marginRight: "auto",
    },
    wrapperSection: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    serviceGrid: {
        overflow: "hidden",
        margin: "0 -15px",
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    imageHolder: {
        [theme.breakpoints.up('xl')]: {
            maxWidth: 340,
            maxHeight:206
        },
        [theme.breakpoints.down('xl')]: {
            maxWidth: 340,
            maxHeight:206
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 425,
            maxHeight:258
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 600,
            maxHeight:365
        },
        width: "100%",
        height: "auto",
        verticalAlign: "middle",
        border: 0,
        borderRadius: 5
    }
}))

export default function Services() {
    const classes = useStyles();
    return (
        <Grid container className={classes.servicesSection}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid className={classes.sectionTitle} >
                        <Typography variant="h2" className={classes.title} > خدمات ما</Typography>
                    </Grid>
                    <Grid container item className={classes.wrapperSection} xs={12}>
                        <Grid direction="row" container className={classes.serviceGrid}>
                            <CartGrid img={<img src={img1} alt="imageHolder" className={classes.imageHolder} />} title="پالایشگاه شیمیایی" />
                            <CartGrid img={<img src={img2} alt="imageHolder" className={classes.imageHolder} />} title="صنایع خودرو" />
                            <CartGrid img={<img src={img3} alt="imageHolder" className={classes.imageHolder} />} title="ساخت فلز" />
                            <CartGrid img={<img src={img4} alt="imageHolder" className={classes.imageHolder} />} title="صنعت چوب" />
                            <CartGrid img={<img src={img5} alt="imageHolder" className={classes.imageHolder} />} title="ساخت و ساز ساختمان" />
                            <CartGrid img={<img src={img6} alt="imageHolder" className={classes.imageHolder} />} title="صنعت فولاد" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}