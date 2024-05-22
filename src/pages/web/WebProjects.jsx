import React from 'react'
import webstyles from "./WebProjects.module.css"
import Arrow from "../../../src/assets/Arrow.png"
import Web1 from "../../../src/assets/Web1.png"
import Web2 from "../../../src/assets/Web2.png"


function WebProjects() {

  const handleGithub = () => {
    window.open("https://github.com/binumarcodes", "_blank")
  }

  return (
    <div className={webstyles["container"]}>
      <div className={webstyles["card"]}>
        <p className={webstyles["heading"]}>Look at how i also craft and shape <span style={{ textDecoration: "wavy"}}>Web</span> apps </p>
            <div  className={webstyles["sub-title"]}>
              <p className={webstyles["title"]}>Play with the Web</p>
              <img src="../src/assets/me.png" alt="" className={webstyles.meImage} />
            </div>
        <div className={webstyles["arrow-container"]}>
          <img src={Arrow} alt="Arrow" className={webstyles["arrow"]} />
        </div>
      </div>
      
    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Construction Company Web App</p>
    <p className={webstyles["title3"]}>Shelter Buildings</p>
    <button className={webstyles["skill-btn"]} onClick={handleGithub}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src={Web1} alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>
      
    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Nigerian Navy Mussium App</p>
    <p className={webstyles["title3"]}>Commands</p>
    <button className={webstyles["skill-btn"]}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src={Web2} alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>
    </div>
  )
}

export default WebProjects
