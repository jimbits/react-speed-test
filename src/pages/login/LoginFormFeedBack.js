import React from "react";
import {  Link} from "react-router-dom"
import "./style.scss"


function LoginFormFeedBack({ onRequestLogin }) {
  return (
    <div className="login-feedback">
      <header>
        <h1>Login Status And Message</h1>
        <Link to="/">
          <button onClick={onRequestLogin}>Go To Dashboard</button>
        </Link>
      </header>
      
    </div>
  );
}

export default LoginFormFeedBack
