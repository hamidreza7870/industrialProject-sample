import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import imgone from "../../assets/images/imgone.jpg";
import imgtwo from "../../assets/images/imgtwo.jpg";
import imgthree from "../../assets/images/imgthree.jpg";
import CartNews from './CartNews';

const useStyles = makeStyles(theme => ({
    newsSection: {
        backgroundColor: "#fafdff",
        [theme.breakpoints.down('sm')]: {
            margin : "0 25px"
        }
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
            width : 750
        },
    },
    row: {
        marginLeft: -15,
        marginRight: -15,
    },
    sectionTitle: {
        marginBottom : 35,
    },
    titleNews: {
        paddingBottom: "0.5em",
        color : theme.palette.primary.backgroundColor,
        "&::before": {
            content: "''",
            backgroundColor: theme.palette.secondary.main,
            width: 33,
            height: 5,
            position: "absolute",
            right: 0,
            bottom: 0,
            borderRadius: 3,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize : "1.6rem"
        }
    },
    descNews: {
        color: theme.palette.text.secondary,
        lineHeight: "1.8em",
        marginBottom: 15,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
            textAlign: "right",
            lineHeight : "1.8rem",
        }
    },
    linkOffer: {
        textDecoration: "none",
        marginLeft: "1rem",
        [theme.breakpoints.down('sm')]: {
            marginRight: 15,
            marginLeft: "auto",
        }
    },
    offerBtn: {
        fontSize: "1.06667rem",
        padding: "8px 27px",
        "&:hover": {
            backgroundColor: "black",
            color: "#fff",
            transition : ".4s"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem",
            padding: "4px 20px",
        },
    },
    newsGrid: {
        margin: "0 -15px",
        paddingTop: 20,
        overflow: "hidden",
    },
    imgNews: {
        borderRadius: 5,
        maxWidth: "100%",
        height: "auto",
        border: 0,
        verticalAlign : "middle",
    },
    details: {
        padding: "20px 30px",
        border: "1px solid #e8e8e8",
    },
    ulMeta: {
        listStyle: "none",
        overflow: "hidden",
        paddingRight: 0,
        margin: 0,
        display: "flex",
        
    },
    metaLi: {
        fontSize: 10,
        color: "#9a9a9a",
        float: "right",
        display : "flex"
    },
    metaIcon: {
        display: "inline-block",
        color: theme.palette.secondary.main,
        paddingLeft: 4,
        fontSize:20,
    }
}))
export default function News() {
    const classes = useStyles();
    return (
        <Grid container className={classes.newsSection}>
            <Grid className={classes.container} container >
                <Grid container item direction="row" className={classes.row}>
                    <Grid container item sm={12} md={3} lg={3}>
                        <Grid className={classes.sectionTitle} container >
                            <Typography variant="h2" className={classes.titleNews}>آخرین اخبار</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item sm={12} md={6} lg={6}>
                        <Typography variant="body1" className={classes.descNews}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان</Typography>
                    </Grid>
                    <Grid container item sm={12} md={3} lg={3} style={{margin : "0 -15px"}}>
                        <Grid container justify="flex-end" className={classes.allNewsLink}>
                            <Link to="/Services/" className={classes.linkOffer}>
                                <Typography className={classes.offerBtn} variant="button" >اخبار بیشتر</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="row" className={classes.row}>
                    <Grid item container xs={12} className={classes.wrapper}>
                        <Grid container direction="row" className={classes.newsGrid}>
                            <CartNews img={imgone} date="01 مرداد" title="درآمد صنعتی چین در هشت ماه اول رشد سریع تر است" desc="با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله" comment="نظرات 2" />
                            <CartNews img={imgtwo} date="مرداد 02" title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم" desc="با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله" comment="نظرات 5" />
                            <CartNews img={imgthree} date="مرداد 04" title="رانندگان اتوبوس در لیورپول رای دادن به اقدامات صنعتی هستند" desc="با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله" comment="نظرات 4" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}