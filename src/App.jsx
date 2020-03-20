import React,{ useState, useEffect }   from 'react';
import './App.css';
import './lock-solid.svg';
import { validateEmail } from "./utils";

const App =()=> {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password,setPassword] = useState("");
  const [passwordError,setPasswordError] = useState("")
  const  config = { min: 8, max: 15 }
  
  useEffect(
    () => {
      if (!email) {
        setEmailError("");
      } else {
        if (validateEmail(email)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email.");
        }
      }
    },
    [email]
  );

  useEffect(
    () => {
      setPasswordError("");
      if (!password) return;
      if (password.length < config.min) {
        setPasswordError(`Password must be at least ${config.min} characters.`);
      } else if (password.length > config.max) {
        setPasswordError(
          `Password must be less than ${config.max} characters.`
        );
      }
    },
    // eslint-disable-next-line 
    [password]
  );

  return (

    <div>
     <form className="registerform">
       <h1 className="register">Register Account</h1>
       <label className="userLabel">EMAIL</label>
          <input 
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              className="userName"
          />
        <div className="error">{emailError}</div>

        <label className="pwLabel">PASSWORD</label>
          <input 
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="password"
          />
      <div className="error">{passwordError}</div>

      <input type="submit" className="submit" value="SUBMIT"/>

        <div className="keepSI">
          <div style={{width:"82px", display:"inline-block"}}><hr/></div>
          <div style={{display:"inline-block", marginLeft:"15px",position:"relative",bottom:"5px", fontWeight:"bold"}}>Already Have an Account?</div>
          <div style={{width:"82px", display:"inline-block", marginLeft:"15px"}}><hr/></div>
          <input type="button" className="loginUser" value="Login to my account"/>
        </div>

      </form>
    </div>
  );
}

export default App;
