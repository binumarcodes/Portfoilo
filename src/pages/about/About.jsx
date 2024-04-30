import React from 'react'
import aboutstyles from "./About.module.css"
import Me from "../../../src/assets/Me.jpg"
import Button from '../../components/Button/Button'

function About() {
  return (
    <div className={aboutstyles["container"]} id='about'>
    <div className={aboutstyles["cards"]}>
      <div className={aboutstyles["left"]}>
        <div className={aboutstyles["card"]}>
            <div className={aboutstyles["image-card"]}>
                <img src={Me} alt="My Picture" className={aboutstyles["my-picture"]} />
            </div>
            <p className={aboutstyles["card-greetings"]}>Hey again 👋</p>
            <p className={aboutstyles["card-text"]}>
                I am currently an intern at iT Central. Where i got to create some experiences that are functional, fun and possitively impact people's lives by making their life less painful and more pleasurable . 
                </p>
                <Button btnText={"Let's Connect"} />
        </div> 
      </div>
      <div className={aboutstyles["right"]}>
        <div className={aboutstyles["card2"]}>
            <p className={aboutstyles["card-greetings"]}>A little bit about me</p>
            <p className={aboutstyles["card-text"]}>
                I am a 20 year old software engineer.
                I'm very good at styling and shapping components.
                And i also love to fetch data.
                I'm studying English at the university which helps me with the communication skills.
                I started coding in Dec, 2021.
                My passion for computer began since when i was in primary school by the time i saw computer in the computer room. 
                </p>
                <button className={aboutstyles["skill-btn"]}>Download CV</button>
        </div> 
        <div className={aboutstyles["card3"]}>
            <p className={aboutstyles["card-greetings"]}>Experience</p>
            <button className={aboutstyles["skill-btn2"]}>React JS</button>
                <p className={aboutstyles["card-text"]}>
                    I am currently an intern at iT Central. I am 20 years old. I am currently an intern at iT Central. I am currently an intern at iT Central. 
                </p>
                <hr style={{borderColor: "gray", marginTop: 5, marginBottom: 5}}/>
                <button className={aboutstyles["skill-btn2"]}>React Native</button>
                <p className={aboutstyles["card-text"]}>
                    I am currently an intern at iT Central. I am 20 years old. I am currently an intern at iT Central. I am currently an intern at iT Central. 
                </p>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default About
