import React from 'react'
import aboutstyles from "./About.module.css"
import Me from "../../../src/assets/Me.jpg"
import Button from '../../components/Button/Button'

function About() {

  const handleDownloadCV = () => {
    window.open("https://docs.google.com/document/d/1bIdvQHbMg32K7et6bTHZl3OErqp6kSAsXXMgSyodeNw/edit?usp=sharing", "_blank");
  };

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
                I am currently a junior partner at iT Central. Where i got to create some experiences that are functional, fun and possitively impact people's lives by making their life less painful and more pleasurable. 
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
                I started coding in Dec, 2019.
                My passion for computer began since when i was in primary school by the time i saw computer in the computer room. 
                </p>
                <button className={aboutstyles["skill-btn"]} onClick={handleDownloadCV}>Download CV</button>
        </div> 
        <div className={aboutstyles["card3"]}>
            <p className={aboutstyles["card-greetings"]}>Experience</p>
            <button className={aboutstyles["skill-btn2"]}>React JS</button>
                <p className={aboutstyles["card-text"]}>
                Skilled in building dynamic web applications with ReactJS, focusing on reusable components, state management with Redux, and API integration.
                </p>
                <hr style={{borderColor: "gray", marginTop: 5, marginBottom: 5}}/>
                <button className={aboutstyles["skill-btn2"]}>React Native</button>
                <p className={aboutstyles["card-text"]}>
                Experienced in developing cross-platform mobile apps using React Native, ensuring high performance and seamless user experiences on iOS and Android. 
                </p>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default About
