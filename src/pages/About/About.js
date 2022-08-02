import React from "react";
import {Link} from "react-router-dom";
// import {useState, useEffect} from "react";
//import ParticlesBackground from "./ParticlesBackground.js";

import mePic from "../../assets/20211117_120036.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import vent from "../../assets/vent.png";

import "../../App.css";

function About() {
    

    return (
        <div className="about-container">
            <div className="all-about">
                <img className="portrait" src={mePic} alt="portrait" />
                <h2 className="tagline">Alicia - Full Stack Developer</h2>
                <h3 className="about-p">I don't know what to write here.  Whenever I have to say anything about myself I forget my entire life and wish the ground would open up and swallow me whole.<br></br><br></br>But thanks for stopping by - hope you're having a goodun.<br></br><br></br>If you'd like to get in touch, I'm available at the links below.</h3>

                <div className="socials">
                    <a href="https://www.linkedin.com/in/alicia-lowe-749a21240/" alt="linkedin link" target="_blank" rel="noreferrer"><img className="linkedin" src={linkedin} alt="linkedin logo" /></a>
                    <a href="https://github.com/lalicia" alt="github link" target="_blank" rel="noreferrer"><img className="github" src={github} alt="github logo" /></a>
                </div>

                {/* <button className="home-btn"> */}
                <Link to="/home"><img className="vent" src={vent} alt="back to home" /></Link>
                {/* </button> */}
            </div>
        </div>
    )



}


export default About;