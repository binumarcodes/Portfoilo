import React from 'react'
import buttonstyles from "./Button.module.css"

const toEmail = () => {
  return (
  <a href="mailto:abdulrahmanbinumar178@gmail.com" />
)
}

function Button({btnText}) {
  return (
    <div>
      <button className={buttonstyles["connect-btn"]} onClick={toEmail}>{btnText}</button>
    </div>
  )
}

export default Button
