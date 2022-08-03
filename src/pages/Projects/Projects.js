import React from "react";
import {Link} from "react-router-dom";
// import {useState, useEffect} from "react";
//import ParticlesBackground from "./ParticlesBackground.js";

import vent from "../../assets/eddvent.png";
import notok1 from "../../assets/notok1.JPG";
// import github from "../../assets/github.png";

import "../../App.css";

function Projects() {
    

    return (
        <div className="projects-container">
            <div className="techandproj-container">
            <div className="tech-container">
                <div className="tech">
                    <h2 className="tech-title">The Tech</h2>
                    <ul className="tech-list">
                        <li className="tech-item">HTML</li>
                        <li className="tech-item">CSS</li>
                        <li className="tech-item">JavaScript</li>
                        <li className="tech-item">VSCode</li>
                        <li className="tech-item">React</li>
                        <li className="tech-item">node.js</li>
                        <li className="tech-item">express.js</li>
                        <li className="tech-item">React Router</li>
                        <li className="tech-item">Heroku</li>
                        <li className="tech-item">PostgreSQL</li>
                        <li className="tech-item">Netlify</li>
                        <li className="tech-item">git</li>
                        <li className="tech-item">GitHub</li>
                        <li className="tech-item">Postman</li>
                        <li className="tech-item">Jest</li>
                        <li className="tech-item">Figma</li>
                        <li className="tech-item">Miro</li>
                        <li className="tech-item">Excalidraw</li>
                        <li className="tech-item">Trello</li>
                        <li className="tech-item">Slack</li>
                    </ul>
                </div>
            </div>
            
            <div className="projects">
                <h1 className="projects-title">The Projects</h1>
                <div className="iam-notok">
                    {/* <h2 className="project-title">iAm != "ok"</h2> */}
                    <img className="notok" src={notok1} alt="project-pic"/>
                    <p className="project-p">iAm != "ok" is a community mental health app, focussed on delivering tools and information with a light, friendly, and approachable feel.<br></br>To see the project live, please visit: 
                    {/* <a className="project-link" href="http://iam-notok.netlify.app" target="_blank" rel="noreferrer"><i> iAm != "ok"</i></a> */}
                    <br></br>For more info, please visit: 
                    {/* <a className="project-link" href="https://github.com/lalicia/iAm_not_ok/blob/main/README.md" target="_blank" rel="noreferrer"><i> GitHub Repo</i></a> */}
                    </p>

                </div>

                <div className="holiday-helper">

                </div>

                <div className="hey-u">

                </div>

                <div className="portfolio">

                </div>

                <div className="bootcamp-booster">

                </div>
            </div>
            <Link to="/home"><img className="vent" src={vent} alt="back to home" /></Link>
            </div>
        </div>
    )



}


export default Projects;