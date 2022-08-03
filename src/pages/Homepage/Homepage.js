import React from "react";
import {Link} from "react-router-dom";
// import {useState, useEffect} from "react";
//import ParticlesBackground from "./ParticlesBackground.js";

// import mePic from "../../assets/20211117_120036.jpg";
// import linkedin from "../../assets/linkedin.png";
// import github from "../../assets/github.png";

import "../../App.css";

function Homepage() {
    

    return (
        <div className="homepage-container">
            <div className="homepage-buttons">
                <Link to="/about-and-contact" style={{textDecoration: "none"}}><h1 className="homepage-link">About and Contact</h1></Link>
                <Link to="/projects-and-tech" style={{textDecoration: "none"}}><h1 className="homepage-link">Projects and Tech</h1></Link>
            </div>
            <Link to="/" style={{textDecoration: "none"}}><h3 className="landing-link"><i>I wanna see the cool Landing page again with the stars, please</i></h3></Link>
        </div>
    )



}


export default Homepage;