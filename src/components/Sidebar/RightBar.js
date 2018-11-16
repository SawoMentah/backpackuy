import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import {landingCarousel} from "../Constant/LandingConstant";

const respOptions = {
    0: {
        items: 1,
    },
    480: {
        items: 1,
    },
    768: {
        items: 1,
    }
};

class RightBar extends Component {
    render() {
        return (
            <div className="sidebarRight">
                <section className="carouselLandingContainer">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay
                        autoplayTimeout={5000}
                        items={4}
                        margin={0}
                        nav
                        dots={false}
                        responsive={respOptions}
                    >
                        {landingCarousel.map((a, i) => (
                            <div className="item" key={i}>
                                <div className="carouselContent">
                                    <div className="carouselHover">
                                        <h5>{a.title}</h5>
                                        <p>{a.kota}</p>
                                    </div>
                                    <img src={require(`../../assets/images/carousel/${i + 1}.jpg`)} alt=""/>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </section>
            </div>
        );
    }
}

export default RightBar;