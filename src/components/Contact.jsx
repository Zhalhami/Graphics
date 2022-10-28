import React from "react";

function Contact(){
    return(
        <div className="about"> 
            <h2>Contact Me:</h2>
            <h4>I am always available for any Graphics design of your choice. Contact me on any of my socials:</h4>
            <div className="contact-icon">
            <a className="contact-icon" href="mailto:belloramadan53@gmail.com"><i class="fa-solid fa-envelope fa-2x"></i></a>
            <a className="contact-icon" href="http://instagram.com/bello_gaucho_10"><i class="fa-brands fa-instagram fa-2x"></i></a>
            <a className="contact-icon" href="http://twitter.com/gaucho_design"><i class="fa-brands fa-twitter fa-2x"></i></a>
            <a className="contact-icon" href="https://wa.me/+2348066874220"><i class="fa-brands fa-whatsapp fa-2x"></i></a>
        </div>
        </div>
    )
}

export default Contact;