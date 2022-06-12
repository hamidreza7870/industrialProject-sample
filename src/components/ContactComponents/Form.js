import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import FormField from "./FormField"

const useStyles = makeStyles(theme => ({
    form: {
        marginTop:70
    },
    container: {
        display: "flex",
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
    labelStyle: {
        fontSize: "1.46667rem",
        color: "#051829",
        fontWeight: 600,
        display: "flex",
    },
    textareaStyle: {
        display: "block",
        width: "100%",
        height: 230,
        padding: "6px 12px",
        border: "2px solid #d1d7e0",
        color:"#595959",
        borderRadius: 10,
        outline: "none",
    },
    formField: {
        marginBottom:40,
        paddingLeft:15,
        paddingRight:15,
    },
    btnForm: {
        width: "100%",
        height: 50,
        fontSize: "1.2rem",
        padding: 0,
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        border: "2px solid #fdc900",
        borderRadius: 3,
        fontFamily: "iranyekan",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.palette.primary.backgroundColor,
            color: "#fff",
            transition:".4s"
        }
    }
}))

export default function Form() {
    const classes = useStyles();
    return (
        <Grid item xs={12} container className={classes.Form}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid container item xs={6}>
                        <FormField label="نام"/>
                    </Grid>
                    <Grid container item xs={6}>
                        <FormField label="نام خانوادگی"/>
                    </Grid>
                    <Grid container item xs={6}>
                        <FormField label="ایمیل"/>
                    </Grid>
                    <Grid container item xs={6}>
                        <FormField label="شماره تلفن"/>
                    </Grid>
                    <Grid container item xs={12} className={classes.formField}>
                        <label for="contact-form-name" className={classes.labelStyle}>پیام</label>
                        <textarea cols="30" rows="6" type="text" name="message" className={classes.textareaStyle} ></textarea>
                    </Grid>
                    <Grid item sm={12} container className={classes.formField}>
                        <button className={classes.btnForm}>ارسال</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}