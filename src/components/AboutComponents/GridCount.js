import React  from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin:"2.5rem 0",
        position: "relative",
        paddingLeft: 15,
        paddingRight: 15,
        [theme.breakpoints.up('sm')]: {
            border:0,
            "&::after": {
                content: "''",
                position: "absolute",
                width: 2,
                height: 105,
                left: -15,
                bottom: "-2%",
                // background: "#d9d9d9",
                background: "-webkit-gradient(linear, left top, left bottom, from(white), color-stop(15%, #d9d9d9), color-stop(80%, #d9d9d9), color-stop(98%, white))"
            },
        },
        [theme.breakpoints.down('sm')]: {
            borderBottom: "1px solid #d9d9d9",
        }
    },
    grid: {
        padding: "0 40px",
        position: "relative",
    },
    factTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#9a9a9a",
        margin: "0 0 1.38em",
        display: "block",
    },
    desc: {
        color: theme.palette.text.secondary,
        lineHeight: "1.8em",
        marginBottom: 15
    },
    desceDetail: {
        color: theme.palette.text.secondary,
        lineHeight: "1.8em",
        marginBottom: 15
    },
    titleDetail: {
        color:theme.palette.secondary.main
    },
    icon: {
        color: "#fdc900",
        fontSize : "4rem"
    },
    number: {
        fontWeight: "bold",
        color: "#051829",
        fontSize : "4rem"

    }
}))

export default function GridCount({ title1, title2, desc, fact }) {
    // const [count , setCount] = useState(0)
    const classes = useStyles();

    return (
        <Grid direction="column" container item sm={12} md={4}  className={classes.root}>
            <Grid className={classes.grid}>
                <Grid className={classes.details}>
                    <Typography variant="h3" className={classes.titleDetail}>
                        <span className={classes.number}>{title2}</span>
                        <span className={classes.icon}>{title1}</span>
                    </Typography>
                    <div className={classes.factTitle}>{fact}</div>
                    <Typography variant="body1" className={classes.desceDetail}>{desc}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
