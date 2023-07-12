import React from "react";
import vector from "../../images/Signup/Vector.png";
import lock from "../../images/Signup/lock.png";
import "./signup.css";
import { NavLink } from "react-bootstrap";
const SignUp = () => {
  return (
    <div className="container-fluid background py-5">
      <div className="col-sm-12 bg-white text-center signup-con">
        <h3 className="heading ">sign in to bid spotter</h3>
        <div className="input-container">
          <img src={vector} alt="" className="input-img" />
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input-fields"
          />
        </div>
        <div className="input-container">
          <img src={lock} alt="" className="input-img" />
          <input
            type="text"
            placeholder="Enter Password"
            className="input-fields"
          />
        </div>
        <div className="btn-sinup">
          <NavLink className="singin-btn">Sign In</NavLink>
          <NavLink className="forgotpassword">forget password ?</NavLink>
          <p className="HaveanAccount">dont have account yet ?</p>
          <NavLink className="signupbtn_outline">
            click here to sign up now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
