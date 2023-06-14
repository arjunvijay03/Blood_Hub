import React from 'react'
import Lottie from "lottie-react";
import Signup from '../Components/Signup/Signup'
import animation from '../assets/blood-load-animation.json'
function SignupPage() {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center ' style={{height:'100dvh'}} >
        <Signup></Signup>
        {/* <Lottie animationData={animation} loop={true} /> */}
    </div>
  )
}

export default SignupPage
