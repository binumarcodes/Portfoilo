import React from 'react'
import webstyles from "./WebProjects.module.css"

function WebProjects() {
  return (
    <div className={webstyles["container"]}>
      <div className={webstyles["card"]}>
        <p className={webstyles["heading"]}>Look at how i craft and shape <span style={{ textDecoration: "wavy"}}>Web</span> apps </p>
            <div  className={webstyles["sub-title"]}>
              <p className={webstyles["title"]}>Play with the Web</p>
              <img src="../src/assets/me.png" alt="" className={webstyles.meImage} />
            </div>
        <div className={webstyles["arrow-container"]}>
          <img src="src/assets/arrow.png" alt="Arrow" className={webstyles["arrow"]} />
        </div>
      </div>
      
    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Multiplayer Web App</p>
    <p className={webstyles["title3"]}>Emoji Swap</p>
    <button className={webstyles["skill-btn"]}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src="src/assets/web1.png" alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>
      
    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Nigerian Navy Mussium Web App</p>
    <p className={webstyles["title3"]}>Commands</p>
    <button className={webstyles["skill-btn"]}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src="src/assets/web2.png" alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>
    </div>
  )
}

export default WebProjects
