import React from "react";
import {Link} from "react-router-dom";
// import {useState, useEffect} from "react";
//import ParticlesBackground from "./ParticlesBackground.js";

import mePic from "../../assets/cat in glasses.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import vent from "../../assets/eddvent.png";

import "../../App.css";

function About() {
    

    return (
        <div className="about-container">
            <div className="all-about">
                <img className="portrait" src={mePic} alt="portrait" />
                <h2 className="tagline">Alicia - Full Stack Developer</h2>
                <h3 className="about-p">This would be some nice intro text about me - who I am, why I'm here, all that good stuff.<br></br><br></br>More blurb maybe - a thanks for stopping by - hope you're having a goodun.<br></br><br></br>If you'd like to get in touch, I'm available at the links below.</h3>

                <div className="socials">
                    {/* This is where you link your profiles - you'd need to change both a hrefs */}
                    <a href="" alt="linkedin link" target="_blank" rel="noreferrer">
                        <img className="linkedin" src={linkedin} alt="linkedin logo" />
                    </a>
                    <a href="" alt="github link" target="_blank" rel="noreferrer">
                        <img className="github" src={github} alt="github logo" />
                    </a>
                </div>

                {/* <button className="home-btn"> */}
                <Link to="/home"><img className="vent" src={vent} alt="back to home" /></Link>
                {/* </button> */}
            </div>
        </div>
    )



}


export default About;