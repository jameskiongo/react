import React from "react";
import Login from "./Login";

var userIsRegistered = false;
//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
const currentTime = new Date().getHours();
function App() {
  return (
    <div className="container">
      {/* {userIsRegistered ? <button>Login</button> : <button>Register</button>} */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* {currentTime > 12 && <h1>Why Are you working</h1>} */}
      <Login registered={userIsRegistered} />
    </div>
  );
}

export default App;
