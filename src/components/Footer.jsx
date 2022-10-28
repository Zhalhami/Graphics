import React from "react";

function Footer(){
    const year = new Date().getFullYear()
    return(
        <div>
            <footer id = "contacts">
                <i className="fa-brands fa-facebook-f icon-f"></i> <i className="fa-brands fa-twitter icon-f"></i> <i className="fa-brands fa-instagram-square icon-f"></i> <i className="fa-solid fa-envelope icon-f"></i>
                <p>Copyright © {year}.</p>
            </footer>
        </div>
    )
}

export default Footer;