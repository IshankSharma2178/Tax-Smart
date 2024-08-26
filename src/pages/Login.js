import React from 'react'
import Template from '../component/auth/Template'
import Image from "../assets/img/icon/graphic2.png"

function Login() {
  return (
    <Template 
         img1={Image}
      formType={"login"}>
    </Template>
  )
}

export default Login