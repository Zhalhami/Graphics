import React from "react";

function Features(){
    return(
        <div className="row align-items-center features-content container-fluid">
            <div className="col-lg-4 feature-box">
                <i className="fa-solid fa-pen-nib fa-3x"></i>
                <h3>Design</h3>
                <p> We make turn dream design into reality.</p>
            </div>
            <div className="col-lg-4 feature-box">
                <i className="fa-solid fa-arrow-trend-up fa-3x"></i>
                <h3>Creativity</h3>
                <p>My sense of creativity is top notch.</p>
            </div>
            <div className="col-lg-4 feature-box">
                <i className="fa-solid fa-globe fa-3x"></i>
                <h3>Accessibility</h3>
                <p> Our design meet the world requirements.</p>
            </div>
        </div>
    )
}

export default Features;