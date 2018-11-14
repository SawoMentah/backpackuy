import React from 'react';
import {colors} from "../Constant/LandingConstant";
import {Link} from 'react-router-dom';

const LandingLast = () => (
    <section className="landingLastContainer">
        <div className="container">
            <h2>Okay, I am <span style={{color: colors.primaryColor}}>Interested</span>, where should i start?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eligendi, sit. Animi consequuntur
                labore odit quae quidem quod totam! Accusantium consequatur delectus dicta eligendi nam, nemo sequi
                voluptatem. Omnis, saepe.</p>
            <Link to="/login">
                <button className="btn btn-outline-primary">Getting Started</button>
            </Link>
        </div>
    </section>
);

export default LandingLast
