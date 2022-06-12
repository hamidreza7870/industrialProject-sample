import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
        display: "table",
        padding: 0,
        marginLeft:"auto",
        marginRight:"auto",
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
            width : "100%"
        },
    },
    row: {
        display: "table-cell",
        verticalAlign: "middle",
        marginLeft: -15,
        marginRight: -15,
    },
    slideItemText: {
        paddingLeft: 15,
        paddingRight: 15,
        [theme.breakpoints.up('md')]: {
            marginRight: "16.66666667%",
        }
    },
    textHeader: {
        margin: "8em 0 18em",
        [theme.breakpoints.down('sm')]: {
            margin: "4em 0 18em",
        }
    },
    slideItemName:{
        fontSize: "3rem",
        fontWeight: 700,
        color: "#fff",
        maxWidth: "15em",
        textAlign: "center",
        margin: "auto",
        marginBottom:".27em",
        [theme.breakpoints.down('md')]: {
            fontSize:"2.3rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.866rem"
        },
    },
    slideItemDesc:{
        fontFamily: "iranyekan",
        textAlign: "center",
        color: "#fff",
        fontSize: "1.666rem",
        fontWeight: 300,
        marginBottom: "1.8em",
        [theme.breakpoints.down('md')]: {
            fontSize:"1.3333rem"
        },
    },
    slideItemBtn:{
        fontFamily : "iranyekan",
        backgroundColor: "#fdc900",
        fontSize: "1.3rem",
        fontWeight: 600,
        color: "black",
        border: "2px solid #fdc900",
        borderRadius: 3,
        padding: "5px 28px",
        textDecoration: "none",
        margin: "0 15px",
        "&:hover": {
            backgroundColor: "black",
            color: "#fff",
            transition: "all 0.2s linear 0s",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
            padding:"4px 20px"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem",
            padding:"4px 18px"
        },
    },
    btnWrapper: {
        display: "flex",
        margin:"auto"
    }
}))

export default function TextHeader() {
    const classes = useStyles();
    return (
        <Grid className={classes.textHeader}>
            <Grid className={classes.container} >
                <Grid className={classes.row}>
                    <Grid item container md={8} className={classes.slideItemText}>
                        <Typography variant="h2" className={classes.slideItemName}>ما بهترین خدمات صنعتی  را در سراسر جهان ارائه می دهیم</Typography>
                        <Typography variant="body1" className={classes.slideItemDesc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</Typography>
                        <Grid className={classes.btnWrapper}>
                            <Typography variant="button" className={classes.slideItemBtn}>خدمات</Typography>
                            <Typography variant="button" className={classes.slideItemBtn}>درباره ما</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
