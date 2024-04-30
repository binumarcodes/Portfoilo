import React from 'react'
import navberstyles from  "./Navbar.module.css"

function Navbar() {
  return (
    <div className={navberstyles["container"]}>
      <div className="logo">
       <img src="../src/assets/Logo.png" alt="" className={navberstyles["logo"]} />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home<span className={navberstyles["link-line"]}></span></a></li>
        <li><a href="#about">About<span className={navberstyles["link-line"]}></span></a></li>
        <li><a href="#projects">Lab<span className={navberstyles["link-line"]}></span></a></li>
      </ul>
    </div>
  )
}

export default Navbar
