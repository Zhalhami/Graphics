import React from "react";
import { Link } from "react-router-dom";

function Landing(){
    return(
        <div className="landing container-fluid">
        <div className="landing-content">
        <h3>Bello Ramadan</h3>
        <h1>We  are here to offer you Amazing Products.</h1>
        <p>Independent design agency with focus on strategy in advertising and design</p>
        <Link to="/about" className="btn btn-dark">About me</Link> <Link to="/contact" className="btn btn-dark">Contact me</Link>
        </div>
            

        </div>
    )
}
export default Landing;