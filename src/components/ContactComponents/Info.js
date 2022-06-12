import React , {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import InfoCart from './InfoCart';
import LocalPhoneSharpIcon from '@material-ui/icons/LocalPhoneSharp';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import "./Info.css"
const useStyles = makeStyles(theme => ({
    info: {

    },
    container: {
        display: "flex",
        padding : "100px 15px 0",
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
    contactInfo: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    iconDetail:{
        fontSize: 22,
        verticalAlign:"sub"
    },
    mapSection: {
        marginRight: "8.33333333%",
        paddingLeft:15,
        paddingRight: 15,
        height:"100%",
    }
}))

export default function Info() {

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaWRyZXphNzg3MCIsImEiOiJja2tsYjFtNjUyZ3V1MnBxdWszYWU5ZTM2In0.Lf05-k4y9fiV0tXyTr1yjQ';
        let map = new mapboxgl.Map({ container: 'map', style: 'mapbox://styles/mapbox/streets-v11' });
        map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken})); 
    }, [])


    const classes = useStyles();
    return (
        <Grid item container className={classes.info}>
            <Grid className={classes.container} container >
                <Grid container className={classes.row}>
                    <Grid container item md={3} className={classes.contactInfo}>
                        <InfoCart title="تلفن" desc="09121234567" icon={<LocalPhoneSharpIcon className={classes.iconDetail} />} />
                        <InfoCart title="ایمیل" desc="support@industrial.com" icon={<EmailIcon className={classes.iconDetail}/>} />
                        <InfoCart title="ساعت کاری" desc="ش - ج (8صبح - 8شب)" icon={<ScheduleIcon className={classes.iconDetail}/>} />
                        <InfoCart title="دفتر" desc="ایران، تهران بزرگ" icon={<LocationOnIcon className={classes.iconDetail}/>} />
                    </Grid>
                    <Grid container item md={8} id="map" className={classes.mapSection}>
                       
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}