import React from "react";
import Input from "./Input";

function Login({ registered }) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!registered && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">{registered ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}

export default Login;
