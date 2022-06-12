import React, { useState } from 'react';
import Features from '../components/Features/Features';
import "../components/HeaderComponents/GsapSlider.css";
import HeaderSection from '../components/HeaderComponents/HeaderSection';
import News from '../components/News/News';
import Offer from "../components/Offer/Offer";
import Parallax from '../components/parallax/Parallax';
import Services from "../components/Services/Services";
import Subscription from '../components/Subscription/Subscription';
import Footer from "../components/Footer/Footer";
import MenuStacky from '../components/HeaderComponents/MenuStacky';
import Helmet from "../components/helmet/index";

export default function Home() {
    const [showMenu, setShowMenu] = useState(false)
    document.body.onscroll = (e) => {
        if (window.pageYOffset > 400 && showMenu === false) {
            setShowMenu(true);
        } else if (window.pageYOffset < 400 && showMenu === true) {
            setShowMenu(false);
        }
    }

    return (
        <div>
            <Helmet title={"خدمات صنعتی | خانه "}  />
            { showMenu ? <MenuStacky /> : null }
            <HeaderSection />
            <Offer />
            <Parallax />
            <Features />
            <Services />
            <Subscription />
            <News />
            <Footer />
        </div>
    )
}
