import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/blood-load-animation.json";

function Loading() {
  return (
    <div className="vh-100 vw-100 position-fixed top-0 start-0 bg-white d-flex justify-content-center align-items-center">
      <div className="w-75 w-lg-25">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
}

export default Loading;
