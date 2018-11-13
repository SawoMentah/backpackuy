import React, {Component} from 'react'
import Navbar from "./Navbar/Navbar";
import LandingHero from "./LandingSections/LandingHero";
import LandingIntro from "./LandingSections/LandingIntro";
import LandingFeatures from "./LandingSections/LandingFeatures";
import LandingCarouselCity from "./LandingSections/LandingCarouselCity";

class Landing extends Component {
    render() {
        return (
            <div>
                <LandingHero/>
                <Navbar/>
                <LandingIntro/>
                <LandingFeatures/>
                <LandingCarouselCity/>
            </div>
        );
    }
}

export default Landing