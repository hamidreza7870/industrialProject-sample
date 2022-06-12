import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Twitter } from '@material-ui/icons'
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    footerSection: {
        backgroundColor: theme.palette.primary.backgroundColor,
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
    },
    grid: {
        position: "relative",
        minHeight: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    footerLogo: {
        fontSize: 24,
        color: "#fff",
        margin: "0 0 2em",
        paddingBottom: "0.5em",
        position: "relative",
        textAlign: "right",
    },
    logo: {
        maxwidth: "100%",
        height: "auto",
        verticalAlign: "middle",
        border: 0,
    },
    footerContent: {
        marginTop: -20,
        color: "#fff",
        listStyle: "none",
        paddingRight: 0,
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 45
        }
    },
    listAbout: {
        position: "relative",
        paddingRight: 38,
        lineHeight: "1.78em",
        color: "#fff",
        marginBottom: 25,
    },
    listFooter: {
        lineHeight: "1.78em",
        color: "#fff",
        marginBottom: 25,
        textAlign: "right",
    },
    textFooter: {
        position: "relative",
        lineHeight: "1.78em",
        textAlign: "right",
        textDecoration: "none",
        color: "#fff",
        "&:hover": {
            color: theme.palette.secondary.main,
            transition: ".4s"
        }
    },
    iconHome: {
        fontSize: 24,
        color: theme.palette.secondary.main,
        position: "absolute",
        right: 0,
        top: 3,
    },
    title: {
        textAlign: 'right',
        fontSize: 24,
        color: "#fff",
        margin: "0 0 2em",
        paddingBottom: "0.5em",
        position: "relative",
        "&::before": {
            content: "''",
            backgroundColor: theme.palette.secondary.main,
            width: 28,
            height: 3,
            position: "absolute",
            right: 0,
            bottom: 0,
            bordeRadius: 5,
        }
    },
    iconTwitter: {
        color: "#198cfa",
        display: "inline-block",
        paddingLeft: 5,
        position: 'relative',
        top: 8
    },
    LinkTwitter: {
        textDecoration: "none",
        color: "#fff",
        fontWeight: 800,
        fontSize: "1.1rem"
    },
    infoBox: {
        textAlign: "right",
        marginTop: 10
    },
    copyright: {
        backgroundColor: "#000204",
        padding: "15px 0",
        textAlign: "center",
        margin: "auto",
        lineHeight: 0,
    }
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.footerSection}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid className={classes.grid} container item sm={6} md={3}>
                        <Grid className={classes.aboutWidget}>
                            <Grid className={classes.footerLogo}>
                                <img src={logo} alt="logoFooter" className={classes.logo} />
                            </Grid>
                            <ul className={classes.footerContent}>
                                <li className={classes.listAbout}>
                                    <HomeIcon className={classes.iconHome} />
                                    <div className={classes.textFooter}>ایران، تهران بزرگ، تهران، میدان آزادی</div>
                                </li>
                                <li className={classes.listAbout}>
                                    <PhoneIcon className={classes.iconHome} />
                                    <div className={classes.textFooter}>+989121234567</div>
                                </li>
                                <li className={classes.listAbout}>
                                    <AccessTimeIcon className={classes.iconHome} />
                                    <div className={classes.textFooter}>ساعات کاری: ش - ج (8صبح - 8شب)</div>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid className={classes.grid} container item sm={6} md={3}>
                        <Grid className={classes.titleList}>
                            <Typography variant="h3" className={classes.title}>خدمات</Typography>
                            <ul className={classes.footerContent}>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>پردازش کشاورزی</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>تحقیقات شیمیایی</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>مهندسی فلز</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>مهندسی مکانیک</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>نفت و گاز</Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid className={classes.grid} item container sm={6} md={3}>
                        <Grid className={classes.titleList}>
                            <Typography variant="h3" className={classes.title}>ناوبری</Typography>
                            <ul className={classes.footerContent}>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>صفحه اصلی</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>درباره</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>خدمات</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>پروژه ها</Link>
                                </li>
                                <li className={classes.listFooter}>
                                    <Link to="/services" className={classes.textFooter}>تماس با ما</Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid className={classes.grid} item container sm={6} md={3}>
                        <Grid className={classes.twitterFeeds}>
                            <Typography variant="h3" className={classes.title}>خوراک توییتر</Typography>
                            <ul style={{ paddingLeft: "5px" }} className={classes.footerContent}>
                                <li className={classes.listFooter}>
                                    <div className={classes.textFooter}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                                    <div className={classes.infoBox}>
                                        <Twitter className={classes.iconTwitter} />
                                        <Link to="/services" className={classes.LinkTwitter}>
                                            @Mark Wahlberg
                                        </Link>
                                    </div>
                                </li>
                                <li style={{ paddingTop: "14px", marginTop: "14px", borderTop: "1px solid #494949" }} className={classes.listFooter}>
                                    <div className={classes.textFooter}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                                    <div className={classes.infoBox}>
                                        <Twitter className={classes.iconTwitter} />
                                        <Link to="/services" className={classes.LinkTwitter}>
                                            @Mark Wahlberg
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.copyright} container >
                <Grid className={classes.wrapper} container>
                    <Typography variant="body1" className={classes.copyright}>© استفاده از مطالب سایت تنها با درج لینک مستقیم به آن مطلب مجاز است.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}



