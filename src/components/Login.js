import React, { useState } from "react";
import "./Log&RegStyles.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlfor="password">Name</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Your Name"
        />
        <label htmlfor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email address"
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch("sign in")}>
        Don't have an account? sign in.
      </button>
    </div>
  );
}
export default Login;
