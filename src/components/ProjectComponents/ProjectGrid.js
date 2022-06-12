import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import Cart from './Cart';
import { Link } from "react-router-dom";
import project1 from "../../assets/images/project1.jpg"
import project2 from "../../assets/images/project2.jpg"
import project3 from "../../assets/images/project3.jpg"
import project4 from "../../assets/images/project4.jpg"
import project5 from "../../assets/images/project5.jpg"

const useStyles = makeStyles(theme => ({
    ProjectGrid: {
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
        [theme.breakpoints.down('md')]: {
            margin:0
        }
    },
    wrapper: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    projectsGridView: {
        margin: "0 -15px",
        display:"flex"
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

export default function ProjectGrid() {
    const classes = useStyles();
    return (
        <Grid container className={classes.ProjectGrid}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid container item xs={12} className={classes.wrapper}>
                        <Grid container className={classes.projectsGridView}>
                            <Cart img={project1} title="پالایشگاه نفت اصفهان" desc="ایران - اصفهان" />
                            <Cart img={project2} title="پالایشگاه نفت تبریز" desc="ایران - تبریز" />
                            <Cart img={project3} title="پالایشگاه نفت تهران" desc="ایران - تهران" />
                            <Cart img={project4} title="پالایشگاه نفت گچساران" desc="ایران - کهکیلویه و بویراحمد" />
                            <Cart img={project5} title="پالایشگاه نفت اصفهان" desc="ایران - اصفهان" />
                            <Cart img={project1} title="پالایشگاه نفت تبریز" desc="ایران - تبریز" />
                            <Cart img={project2} title="پالایشگاه نفت تهران" desc="ایران - تهران" />
                            <Cart img={project3} title="پالایشگاه نفت تهران" desc="ایران - تهران" />
                            <Cart img={project4} title="پالایشگاه نفت اصفهان" desc="ایران - اصفهان" />
                        </Grid>
                        <Grid container justify="center" alignItems="center" className={classes.allServices}>
                            <Link to="/projects" className={classes.LoadMore}>پروژه های بیشتر</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )}