import React, { Component } from "react";
import style from "./Login.module.css";

class Login extends Component {
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
          <div className="text-center">
            <button className={style.buttonStyle}>Login</button>
            <div className="nav-link">Already have an account?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
