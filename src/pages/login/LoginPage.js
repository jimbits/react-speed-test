import React, {useState} from 'react';
import LoginForm from "./LoginForm"
import LoginFormFeedBack from "./LoginFormFeedBack"
import posed from "react-pose"
import "./style.scss"
const Box = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration:300,
      ease: "linear"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 300,
      ease: "linear"
    }
  }
});

function LoginPage (props) {
    
  
 
    const [view, setViewState] = useState(true)
  
 
    return (
      <div>
        <div className="login-page">
          <h1>Login Page</h1>
       
          <p>{view}</p>
          <div className="break"> </div>
        </div>
        <div className="contents">
          <Box pose={view ? "visible" : "hidden"}>
            <LoginForm />
          </Box>

          <Box pose={view ? "hidden" : "visible"}>
            <LoginFormFeedBack />
          </Box>
        </div>
        <button onClick={() => setViewState(!view)}>open form</button>
      
      </div>
    );
}
export default LoginPage