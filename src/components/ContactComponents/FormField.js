import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    labelStyle: {
        fontSize: "1.46667rem",
        color: "#051829",
        fontWeight: 600,
        display: "flex",
    },
    formField: {
        paddingLeft: 15,
        paddingRight: 15,  
        width: "100%",
        marginTop: 30,
        position: "relative",
        marginBottom:40

    },
    inputStyle: {
        border: "2px solid #d1d7e0",
        color:"#595959",
        borderRadius:10,
        fontSize: 14,
        height: 45,
        width: "100%",
        verticalAlign: "middle",
        padding: "6px 12px",
        outline:"none"
    },
  }));

export default function FormField({label }) {
    const classes = useStyles();
    return (
        <div className={classes.formField}>
            <label for="contact-form-name" className={classes.labelStyle}>{label}</label>
            <input type="text" name="name" className={classes.inputStyle} ></input>
        </div>
    )
}
