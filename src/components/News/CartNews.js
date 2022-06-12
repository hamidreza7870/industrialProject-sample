import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import ForumIcon from '@material-ui/icons/Forum';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
    grid: {
        padding: "0 15px",
        [theme.breakpoints.down('xs')]: {
            marginBottom :40
        }
    },
    newsGrid: {
        margin: "0 -15px",
        paddingTop: 20,
        overflow: "hidden",
        [theme.breakpoints.down('sm')]: {
            paddingTop:40
        }
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
    metaLiRight: {
        fontSize: 10,
        color: "#9a9a9a",
        float: "right",
        display : "flex"
    },
    metaLiLeft: {
        fontSize: 10,
        color: "#9a9a9a",
        float: "right",
        display: "flex",
        marginRight : 15,
    },
    metaIcon: {
        display: "inline-block",
        color: theme.palette.secondary.main,
        paddingLeft: 4,
        fontSize:17,
    },
    date: {
        fontSize: ".9rem",
        lineHeight: "20px",
        color:theme.palette.text.secondary
    },
    metaLink: {
        color:theme.palette.text.secondary,
        textDecoration: "none",
        fontSize: ".9rem",
    },
    titleNews: {
        color: theme.palette.primary.backgroundColor,
        textAlign: 'right',
        margin: "0.72em 0 0.83em",
        "&:hover": {
            color : theme.palette.secondary.main,
            transition : ".2s"
        }
    },
    descNews: {
        color: theme.palette.text.secondary,
        textAlign: 'right',
        marginBottom : 15,
        
    },
    linkNews: {
        textDecoration: "none",
    }
}))
export default function CartNews({ title, desc, date, comment, img }) {
    const classes = useStyles();
    return (
    <Grid container item className={classes.grid} xs={12} sm={6} md={4}>
        <Grid className={classes.media}>
            <img alt="news" className={classes.imgNews} src={img} />
        </Grid>
        <Grid className={classes.details} container direction="row">
            <Grid  className={classes.meta}>
                <ul className={classes.ulMeta}>
                    <li className={classes.metaLiRight}>
                        <AccessTimeIcon className={classes.metaIcon}/>
                            <span className={classes.date}>{date}</span>
                    </li>
                    <li className={classes.metaLiLeft}>
                        <ForumIcon className={classes.metaIcon} />
                        <Link to="/services" className={classes.metaLink}>
                            {comment}
                        </Link>
                    </li>
                </ul>
            </Grid>
                <Grid className={classes.body}>
                    <Link to="/services" className={classes.linkNews}>
                        <Typography variant="h3" className={classes.titleNews}>{title}</Typography>
                    </Link>
                    <Typography variant="body1" className={classes.descNews}>{desc}</Typography>
            </Grid>
        </Grid>
    </Grid>
    )
}
