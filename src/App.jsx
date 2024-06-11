import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isSignup ? 'signup' : 'login'}`}>
          {isSignup ? 'Signup Form' : 'Login Form'}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={!isSignup} onChange={handleLoginClick} />
          <input type="radio" name="slide" id="signup" checked={isSignup} onChange={handleSignupClick} />
          <label htmlFor="login" className={`slide login ${!isSignup ? 'active' : ''}`} onClick={handleLoginClick}>Login</label>
          <label htmlFor="signup" className={`slide signup ${isSignup ? 'active' : ''}`} onClick={handleSignupClick}>Signup</label>
          <div className={`slider-tab ${isSignup ? 'signup' : 'login'}`}></div>
        </div>
        <div className="form-inner" style={{ transform: isSignup ? 'translateX(-50%)' : 'translateX(0)' }}>
          <form action="#" className="login">
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">Not a member? <a href="#" onClick={handleSignupClick}>Signup now</a></div>
          </form>
          <form action="#" className="signup">
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
