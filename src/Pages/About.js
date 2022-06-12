import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Header from '../components/Header/Header';
import PageTitle from '../components/Header/PageTitle';
import Footer from "../components/Footer/Footer";
import Team from "../components/Slider/Team"
import Offer from '../components/Offer/Offer';
import Parallax from '../components/parallax/Parallax';
import Features from "../components/Features/Features"
import Counter from '../components/AboutComponents/Counter';
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
            <Helmet title={"خدمات صنعتی | درباره ما"}  />
            { showMenu ? <NavStacky /> : null}
            <Header />
            <PageTitle title="درباره" />
            <Offer />
            <Parallax />
            <Features />
            <Team />
            <Counter />
            <Footer />
        </Grid>
    )
}