import React from 'react'
import skillsstyle from "./Skills.module.css"

function Skills() {
  return (
    <div className={skillsstyle["container"]}>
      <img src="../src/assets/Skills.png" alt="" className={skillsstyle["img"]} />
      <div id='projects' className={skillsstyle["projects-id"]}></div>
    </div>
  )
}

export default Skills
