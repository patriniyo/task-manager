import React from "react";
import { Link } from "react-router-dom";

const SignupMessage = () => {

  return (
    <div className="home-page">
      <div className="home-page-background"></div>
      <div className="sign-in-holder">
        <div className="sign-in">
          <p style={{fontSize: "14px"}}>The registration was successfully</p>
      
          <Link style={{fontSize: "14px", marginLeft: "50px"}}
          
            to="/"
            className="sign-in-holder_p"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupMessage;
