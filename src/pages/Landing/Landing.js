import React from "react";
//import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground.js";

import startButton from "../../assets/start.webp";

import "../../App.css";

function Landing() {
    // const [showButton, setShowButton] = useState(false);
    

    //     useEffect(() => {
    //         setInterval(() => {
    //             setShowButton(!showButton)    
    //         }, 7000)}, []);
    

    return (
        <>
            <ParticlesBackground />
            <div className="landing_content">
                <h1>Alicia Lowe<br></br>totally not sus - <mark className="red">promise</mark></h1>

                <button className="start-button"><Link to="/home"><img className="start-button-img" src={startButton} alt="button" /></Link></button>

                {/* {showButton && <button className="start-button"><Link to="/about"><img className="start-button-img" src={startButton} /></Link></button>} */}
            </div>
        </>
    )



}


export default Landing;