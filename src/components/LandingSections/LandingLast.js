import React from 'react';
import {colors} from "../Constant/Constant";
import {Link} from 'react-router-dom';

const LandingLast = () => (
    <section className="landingLastContainer">
        <div className="container">
            <h2>Okay, I am <span style={{color: colors.primaryColor}}>Interested</span>, where should i start?</h2>
            <Link to="/login">
                <button className="btn btn-outline-primary">Getting Started</button>
            </Link>
        </div>
    </section>
);

export default LandingLast
