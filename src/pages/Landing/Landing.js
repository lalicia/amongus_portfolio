import React from "react";
import {useState, useEffect} from "react";

import "../../App.css";

function Landing() {
    const [isEmpty, setEmpty] = useState(false);

 
    setTimeout(() => {setEmpty(prev => !prev)}, 5000);
    

    return (
        <>
             <div className={isEmpty ? "emptywriteout" : "writeout"}>
            </div>
            {/* <button className={"writeout_btn" onClick={resetInputField}>Release</button> */}
        </>
    )



}


export default Landing;