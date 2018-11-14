import React from 'react';
import {colors, landingFeatures} from "../Constant/LandingConstant";


const LandingFeatures = () => (
    <section className="featuresLanding container">
        <h2>What Features do <span style={{color: colors.primaryColor}}>Backpackuy</span> offers?</h2>
        <div className="row ">
            {landingFeatures.map(a => (
                <div className="col-md-4">
                    <div className="cardFeatures">
                        <img src="https://via.placeholder.com/150" alt={a.title} className="rounded-circle"/>
                        <h4>{a.title}</h4>
                        <p>{a.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default LandingFeatures