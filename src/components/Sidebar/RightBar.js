import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import {landingCarousel} from "../Constant/Constant";
import CurrencyFormat from 'react-currency-format';

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
        console.log(this.props.info);
        if (this.props.empty) {
            return (
                <div className="sidebarRight">
                    <section className="sidebarRightContent">
                        <h3>Hi There</h3>
                        <div className="rightDesc">
                            <span>Welcome, start dragging card on the left side</span>
                        </div>
                    </section>
                </div>
            )
        } else {
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
                        <h3>{this.props.info[0].nama}</h3>
                        <div className="rightDesc">
                            <p>{this.props.info[0].desc}</p>
                        </div>
                        <div className="rightDesc">
                            <h4>Tiket Masuk</h4>
                            <h6><CurrencyFormat value={this.props.info[0].tiket} displayType={'text'}
                                                thousandSeparator={true} prefix={'Rp'}/></h6>
                        </div>
                        <div className="rightDesc">
                            <h4>Jam Buka</h4>
                            <h6>{this.props.info[0].buka}</h6>
                        </div>
                    </section>
                </div>
            );
        }
    }
}

export default RightBar;