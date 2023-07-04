import React from "react";
import "../pages/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="form">
        <table>
          <thead>
            <tr>
              <div className="head">Login</div>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email:</td>
            </tr>
            <tr>
              <td>
                <input id="email" type="text" placeholder="Email" />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
            </tr>
            <tr>
              <td>
                <input type="Password" placeholder="Password" id="password" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
                Show Password
              </td>
            </tr>
            <tr>
              <td>
                <input id="button" type="Button" value="SIGN IN" />
              </td>
            </tr>
            <tr>
              <td>
                <div id="footer">
                  Forgot
                  <a href="/Sign">Username / Password?</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div id="footer">
                  Don't have an account?
                  <a href="/Sign">Sign up</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Login;
