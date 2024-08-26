import React from 'react'
import Template from "../component/auth/Template"
import Image from "../assets/img/illustration/11.png"

function Signup() {
  return (
    <Template 
      img1={Image}
      formType={"signup"}>
    </Template>
  )
}

export default Signup