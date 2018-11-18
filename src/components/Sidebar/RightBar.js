import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import {landingCarousel} from "../Constant/Constant";

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
                <section className="carouselDetailTempat">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay
                        autoplayTimeout={2000}
                        items={4}
                        margin={0}
                        nav={false}
                        dots={false}
                        responsive={respOptions}
                    >
                        {landingCarousel.map((a, i) => (
                            <div className="item" key={i}>
                                <div className="carouselContent">
                                    <img src={require(`../../assets/images/carousel/${i + 1}.jpg`)} alt=""/>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </section>
                <section className="sidebarRightContent">
                    <h3>Jawa Timur Park 3</h3>
                    <div className="rightDesc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum mollitia provident sequi
                            suscipit temporibus! Accusamus animi, distinctio ducimus ea facere fuga, harum hic minima,
                            odit porro qui ratione saepe veritatis?</p>
                    </div>
                    <div className="rightDesc">
                        <h4>Tiket Masuk</h4>
                        <h6>Rp60.000</h6>
                    </div>
                    <div className="rightDesc">
                        <h4>Jam Buka</h4>
                        <h6>09.00 - 21.00</h6>
                    </div>
                </section>
            </div>
        );
    }
}

export default RightBar;