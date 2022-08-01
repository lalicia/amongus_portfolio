import React from "react";
import {useState, useEffect} from "react";
import ParticlesBackground from "./ParticlesBackground.js";

import startButton from "../../assets/start.webp";

import "../../App.css";

function Landing() {
    const [showButton, setShowButton] = useState(false);
    

        useEffect(() => {
            setInterval(() => {
                setShowButton(!showButton)    
            }, 7000)}, []);
    

    return (
        <>
            <ParticlesBackground />
            <h1>Alicia Lowe<br></br>totally not sus - <mark className="red">promise</mark></h1>

            {showButton && <button className="start-button"><img className="start-button-img" src={startButton} /></button>}
        </>
    )



}


export default Landing;