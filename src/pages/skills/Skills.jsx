import React from 'react'
import skillsstyle from "./Skills.module.css"
import Skills from "../../../src/assets/Skills.png" 

function Skills() {
  return (
    <div className={skillsstyle["container"]}>
      <img src={me} alt="" className={skillsstyle["img"]} />
      <div id='projects' className={skillsstyle["projects-id"]}></div>
    </div>
  )
}

export default Skills
