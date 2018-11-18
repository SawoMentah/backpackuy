import React from 'react';
import {colors} from "../Constant/Constant";
import illustration1 from '../../assets/images/whatis.png'
import posed from "react-pose";

const P = posed.p({
    enter: {x: 0, opacity: 1},
    exit: {x: -50, opacity: 0}
});
const Container = posed.div({
    enter: {staggerChildren: 50}
});
const LandingIntro = () => (
    <section className="introContainer container">
        <h2>Introducing <span style={{color: colors.primaryColor}}>Backpackuy</span></h2>
        <div className="row">
            <Container className="col-md-6">
                <P className="textLanding">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid commodi dignissimos
                    ducimus explicabo fuga hic id nobis numquam perspiciatis possimus praesentium ratione recusandae
                    suscipit tempora tempore tenetur vel vero?
                </P>
                <P className="textLanding">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid commodi dignissimos
                    ducimus explicabo fuga hic id nobis numquam perspiciatis possimus praesentium ratione recusandae
                    suscipit tempora tempore tenetur vel vero?
                </P>
                <P className="textLanding">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid commodi dignissimos
                    ducimus explicabo fuga hic id nobis numquam perspiciatis possimus praesentium ratione recusandae
                    suscipit tempora tempore tenetur vel vero?
                </P>
            </Container>
            <div className="col-md-6">
                <img className="imageIntro" src={illustration1} alt=""/>
            </div>
        </div>
    </section>
);

export default LandingIntro