import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../img/argentBankLogo;"
import "../../css/main.css";

function Header(){

   return(
    <nav className="main-nav">
    <a className="main-nav-logo" href="../src/Pages/Index.js">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a className="main-nav-item" href="../src/Pages/sign-in.js">
        <i className="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  </nav>
   )
}
export default Header;