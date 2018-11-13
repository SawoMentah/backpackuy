import React, {Component} from 'react'
import Navbar from "./Navbar/Navbar";
import LandingHero from "./LandingSections/LandingHero";
import LandingIntro from "./LandingSections/LandingIntro";
import LandingFeatures from "./LandingSections/LandingFeatures";

class Landing extends Component {
    render() {
        return (
            <div>
                <LandingHero/>
                <Navbar/>
                <LandingIntro/>
                <LandingFeatures/>
            </div>
        );
    }
}

export default Landing