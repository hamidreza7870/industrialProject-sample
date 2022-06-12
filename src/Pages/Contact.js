import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import PageTitle from '../components/Header/PageTitle';
import Footer from "../components/Footer/Footer";
import Form from '../components/ContactComponents/Form';
import Info from '../components/ContactComponents/Info';
import NavStacky from '../components/Header/NavStacky';
import Helmet from "../components/helmet/index";

export default function Services() {
    const [showMenu, setShowMenu] = useState(false)
    document.body.onscroll = (e) => {
        if (window.pageYOffset > 400 && showMenu === false) {
            setShowMenu(true);
        } else if (window.pageYOffset < 400 && showMenu === true) {
            setShowMenu(false);
        }
    }

    return (
        <Grid>
            <Helmet title={"خدمات صنعتی | تماس با ما"}  />
            { showMenu ? <NavStacky /> : null}
            <Header />
            <PageTitle title="تماس"/>
            <Info />
            <Form />
            <Footer />
        </Grid>
    )
}
