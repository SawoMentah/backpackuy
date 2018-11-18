import React from 'react';
import {colors, profile} from "../Constant/Constant";
import posed from "react-pose";

const Container = posed.div({
    enter: {staggerChildren: 50}
});
const Profile = posed.div({
    enter: {y: 0, opacity: 1},
    exit: {y: 50, opacity: 0}
});

document.body.style.backgroundColor = "white";

const AboutUs = () => {
    return (
        <div>
            <div className="container">
                <h2><span style={{color: colors.primaryColor}}>Absurd</span> Division</h2>
                <Container className="row">
                    {profile.map((a, i) => (
                        <div className="col-md-4" key={i}>
                            <Profile className="cardAnggota">
                                <img src={require("../../assets/images/profile/" + a.pic + "")} alt={a.title}
                                     className="rounded-circle" width="150"/>
                                <h4>{a.nama}</h4>
                                <p>{a.desc}</p>
                            </Profile>
                        </div>
                    ))}
                </Container>
            </div>
        </div>
    )
};

export default AboutUs