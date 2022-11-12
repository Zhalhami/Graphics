import React from "react";

function Footer(){
    const year = new Date().getFullYear()
    return(
        <div>
            <footer id = "contacts">
            <a href="mailto:belloramadan53@gmail.com"><i class="fa-solid fa-envelope fa-2x"></i></a>
            <a href="http://instagram.com/bello_gaucho_10"><i class="fa-brands fa-instagram fa-2x"></i></a>
            <a href="http://twitter.com/gaucho_design"><i class="fa-brands fa-twitter fa-2x"></i></a>
            <a href="https://wa.me/+2348066874220"><i class="fa-brands fa-whatsapp fa-2x"></i></a>
            <p>Designed by <a className="anchor" href="https://twitter.com/abduulsalamr">Abdulsalam Ridwan</a>  {year}.</p>
            </footer>
        </div>
    )
}

export default Footer;