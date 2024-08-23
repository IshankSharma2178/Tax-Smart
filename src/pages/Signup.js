import React from 'react'
import Template from "../component/auth/Template"
import images from "../assets/img/authImages/graphic5.svg"

function Signup() {
  return (
    <Template 
      img1={images}
      heading={"Join the millions learning to Tax for free"}
      subheading1={"Get Knowlwegde for today, tomorrow, and beyond."}
      subheading2={"Education to future-proof ."}
      formType={"signup"}>
    </Template>
  )
}

export default Signup