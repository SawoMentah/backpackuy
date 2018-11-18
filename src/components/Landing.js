import React, {Component} from 'react'
import Navbar from "./Navbar/Navbar";
import LandingHero from "./LandingSections/LandingHero";
import LandingIntro from "./LandingSections/LandingIntro";
import LandingFeatures from "./LandingSections/LandingFeatures";
import LandingCarouselCity from "./LandingSections/LandingCarouselCity";
import LandingLast from "./LandingSections/LandingLast";
import Footer from "./Footer/Footer";

class Landing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.body.style.background = "white";
        return (
            <div>
                <LandingHero/>
                <Navbar home={true}/>
                <LandingIntro/>
                <LandingCarouselCity/>
                <LandingFeatures/>
                <LandingLast/>
                <Footer/>
            </div>
        );
    }
}

export default Landing