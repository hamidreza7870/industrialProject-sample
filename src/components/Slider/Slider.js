import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";
import "./Slider.css"
const useStyles = makeStyles(theme => ({
    root: {
        position:"relativ",
   
    },
    container: {
        padding : "0 15px",
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
            margin: "0 15px",
        },
    },
    row: {
        margin: "0 50px",

    },
    cart: {
        margin: "0 2em",
        outline: "none",
    },
    info: {
        marginTop: 25,
        marginRight:40
    },
    title: {
        color: theme.palette.primary.backgroundColor,
        fontSize:22
    },
    desc:{
        color: theme.palette.text.secondary,
    }
}))

export default function MultipleItems() {
    const classes = useStyles();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
        <Grid className={classes.root}>
            <Grid className={classes.container} >
                <Grid className={classes.row}>
                    <Slider className={classes.slider} {...settings}>
                        <Grid className={classes.cart}>
                            <img src={Slider1} alt="slider1" className={classes.imageSlider} />
                            <Grid className={classes.info}>
                                <Typography variant="h3" className={classes.title}>علی محمدی</Typography>
                                <Typography variant="body1" className={classes.desc}>مدیر هیئت مدیره</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cart}>
                            <img src={Slider2} alt="slider1" className={classes.imageSlider} />
                            <Grid className={classes.info}>
                                <Typography variant="h3" className={classes.title}>علی محمدی</Typography>
                                <Typography variant="body1" className={classes.desc}>مدیر هیئت مدیره</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cart}>
                            <img src={Slider3} alt="slider1" className={classes.imageSlider} />
                            <Grid className={classes.info}>
                                <Typography variant="h3" className={classes.title}>علی محمدی</Typography>
                                <Typography variant="body1" className={classes.desc}>مدیر هیئت مدیره</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cart}>
                            <img src={Slider1} alt="slider1" className={classes.imageSlider} />
                            <Grid className={classes.info}>
                                <Typography variant="h3" className={classes.title}>علی محمدی</Typography>
                                <Typography variant="body1" className={classes.desc}>مدیر هیئت مدیره</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cart}>
                            <img src={Slider2} alt="slider1" className={classes.imageSlider} />
                            <Grid className={classes.info}>
                                <Typography variant="h3" className={classes.title}>علی محمدی</Typography>
                                <Typography variant="body1" className={classes.desc}>مدیر هیئت مدیره</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cart}>
                            <img src={Slider3} alt="slider1" className={classes.imageSlider} />
                            <Grid className={classes.info}>
                                <Typography variant="h3" className={classes.title}>علی محمدی</Typography>
                                <Typography variant="body1" className={classes.desc}>مدیر هیئت مدیره</Typography>
                            </Grid>
                        </Grid>
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
  }