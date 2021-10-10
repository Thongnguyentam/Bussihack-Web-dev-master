import React from 'react'
import {useHistory} from 'react-router-dom'
import "./Login.css";
function Login() {
        const history = useHistory();
        function onLoginClick(event) {
          history.push({
            pathname: "/home",
          });
        }

        return (
          <div className="login-page">
            <div className="login-form">
              <div className="login-title"> Please log into your account </div>
              <div className="login-input">
                <div className="login-text">Username</div>
                <input
                  type="search"
                  name="username"
                  placeholder="Username"
                  id="infor-username"
                  required
                />
              </div>
              <div className="login-input">
                <div className="login-text">Password</div>
                <input
                  type="search"
                  name="password"
                  placeholder="Password"
                  id="infor-password"
                  required
                />
              </div>
              <button className="login-btn" onClick={onLoginClick}>
                Login
              </button>
            </div>
          </div>
        );
}

export default Login
