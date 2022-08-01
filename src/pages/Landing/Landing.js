import React from "react";
import {useState, useEffect} from "react";
import ParticlesBackground from "./ParticlesBackground.js";

import startButton from "../../assets/start.webp";

// import "../../App.css";

function Landing() {
    const [enter, setEnter] = useState("");
    
        // setTimeout(() => {
        //     setEnter(<button><img src={startButton} /></button>);
        // }, 7000);

       
    

    return (
        <>
            <ParticlesBackground />
            <h1>Alicia Lowe<br></br>totally not sus - <mark className="red">promise</mark></h1>
            {/* <>{enter}</> */}
        </>
    )



}


export default Landing;