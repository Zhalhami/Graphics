import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to ="/">
        <img src="images/gaucho.jpeg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top">
    </img>GAUCHO DESIGN</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = "/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to= "/contact">Contacts</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-secondary" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
</div>

    )
}

export default Header;