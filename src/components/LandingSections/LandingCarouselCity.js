import React, {Component} from 'react';
import {landingCarousel} from "../Constant/LandingConstant";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class LandingCarouselCity extends Component {
    render() {
        const respOptions = {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 4,
            }
        };

        return (
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
        );
    }
}
export default LandingCarouselCity