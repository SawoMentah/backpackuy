import React from 'react';
import {colors} from "../Constant/LandingConstant";
import illustration1 from '../../assets/images/whatis.png'

const height = "300px";

const LandingIntro = () => (
    <section className="introContainer container">
        <h2>Introducing <span style={{color: colors.primaryColor}}>Backpackuy</span></h2>
        <div className="row">
            <div className="col-md-6">
                <p className="textLanding">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid commodi dignissimos
                    ducimus explicabo fuga hic id nobis numquam perspiciatis possimus praesentium ratione recusandae
                    suscipit tempora tempore tenetur vel vero?
                </p>
                <p className="textLanding">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid commodi dignissimos
                    ducimus explicabo fuga hic id nobis numquam perspiciatis possimus praesentium ratione recusandae
                    suscipit tempora tempore tenetur vel vero?
                </p>
                <p className="textLanding">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid commodi dignissimos
                    ducimus explicabo fuga hic id nobis numquam perspiciatis possimus praesentium ratione recusandae
                    suscipit tempora tempore tenetur vel vero?
                </p>
            </div>
            <div className="col-md-6">
                <img src={illustration1} alt="" width="400"/>
            </div>
        </div>
    </section>
);

export default LandingIntro