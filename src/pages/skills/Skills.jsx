import React from 'react'
import skillsstyle from "./Skills.module.css"

function Skills() {
  return (
    <div className={skillsstyle["container"]}>
      <img src="../src/assets/Skills.png" alt="" className={skillsstyle["img"]} />
    </div>
  )
}

export default Skills
