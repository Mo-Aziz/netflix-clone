import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
 const register = (e)=>{
   e.preventDefault();
 }

 const signIn = (e)=>{
   e.preventDefault();
 }

  return (
    <div className="signup__screen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signup__screen__gray">New To Netflix? </span>
          <span className="singup__screen__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
