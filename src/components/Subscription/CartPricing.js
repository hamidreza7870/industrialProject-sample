import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
    pricingGrid: {
        textAlign: "center",
        padding: "0 15px 15px 15px",
        [theme.breakpoints.down('md')]: {
            minWidth : "50%"
        }
    },
    pricingHeader: {
        backgroundColor: "#051829",
        padding:"40px 0",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        position: "relative",
        overflow: "hidden",
        width : "100%",
    },
    BtnPrice : {
        border: "2px solid #fdc900",
        color: theme.palette.primary.backgroundColor,
        transition : ".3s",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
        fontSize: "1.06667rem",
        padding:"6px 50px"
    },
    LinkPrice : {
        zIndex: 1,
        textDecoration : "none",
    },
    title: {
        fontSize: "1.6rem",
        color : theme.palette.secondary.main
    },
    price: {
        fontSize : "3.2rem"
    },
    pricingDetail: {
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        width : "100%"
    },
    body: {
        padding : "40px 15px",
    },
    ulBody: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        
    },
    liBody: {
        color: theme.palette.text.secondary,
        marginTop: 17,
        fontSize : ".9em"
    },
    footer: {
        borderTop: "1px solid #d9d9d9",
        padding: "19px 0",
    },
    footertitle: {
        color: theme.palette.primary.backgroundColor,
        fontWeight: 400,
        fontSize : "1rem"
    },
    footerdesc: {
        fontSize : "1.2rem",
        fontWeight: 800
    }
}))

export default function CartPricing({price , title }) {
    const classes = useStyles()
    return (
        <Grid className={classes.pricingGrid} container item md={4}>
            <Grid className={classes.pricingHeader}>
                <Typography variant="h3" className={classes.title}>{title}</Typography>
                <Typography variant="h2" className={classes.price}>
                    {price}
                     <span className={classes.priceAfter}>ت</span>
                </Typography>
                <Link to="/services" className={classes.LinkPrice} >
                    <Typography className={classes.BtnPrice} variant="button" >ثبت نام</Typography>
                </Link>
            </Grid>
            <Grid className={classes.pricingDetail}>
                <Grid className={classes.body}>
                    <ul className={classes.ulBody}>
                        <li className={classes.liBody}> لورم ایپسوم متن ساختگی با تولید سادگی</li>
                        <li className={classes.liBody}> نامفهوم از صنعت چاپ و با استفاده</li>
                        <li className={classes.liBody}> از طراحان گرافیک است. چاپگرها و متون</li>
                        <li className={classes.liBody}>بلکه روزنامه و مجله در ستون</li>
                        <li className={classes.liBody}>سطرآنچنان که لازم است و برای شرایط</li>
                        <li className={classes.liBody}>فعلی تکنولوژی مورد نیاز</li>
                    </ul>
                </Grid>
                <Grid className={classes.footer}>
                    <Typography variant="body1" className={classes.footertitle}>
                        <span className={classes.footerdesc}> 25% </span>
                        تخفیف سالانه
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
