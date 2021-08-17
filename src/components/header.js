import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Header() {
  function toggleMenu(){
    let hamburger = document.querySelector(".header__nav-hamburger-icon");
    let close = document.querySelector(".header__nav-hamburger-close");
    let navItems = document.querySelector(".header__nav-mobile-items");
    hamburger.classList.toggle("hide");
    close.classList.toggle("hide");
    navItems.classList.toggle("hide");
  }

    return (
        <div className="header">
            <svg className="header__logo" xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
            <div className="header__nav-mobile">
              <div className="header__nav-hamburger">
                 <svg onClick={()=>toggleMenu()} className="header__nav-hamburger-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="13"><g fill="#33323D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"/></g></svg>
                 <svg onClick={()=>toggleMenu()} className="header__nav-hamburger-close hide" xmlns="http://www.w3.org/2000/svg" width="18" height="19"><path fill="#33323D" fill-rule="evenodd" d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"/></svg>
              </div>
              <ul className="header__nav-mobile-items hide">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT ME</Link></li>
              </ul>
            </div>
            <ul className="header__nav-desktop">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT ME</Link></li>
            </ul>
        </div>
    )
}

export default Header
