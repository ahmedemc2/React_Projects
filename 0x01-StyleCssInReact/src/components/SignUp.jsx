import React, { Component } from "react";
// import { buttonStyle } from "./style/style"t;
import style from "./SignUp.module.css";
class Signup extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <input
            type="text"
            className="form-control my-4 py-4"
            placeholder="Username"
          />
          <input
            type="password"
            className="form-control my-4 py-4"
            placeholder="Password"
          />
          <input
            type="password"
            className="form-control my-4 py-4"
            placeholder="Re-type Password"
          />
          <div className="text-center">
            <button className={style.buttonStyle}>Signup</button>
            <div className="nav-link">Already have an account?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
