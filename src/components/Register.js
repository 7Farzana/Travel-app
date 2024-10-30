import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlfor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="name"
          name="name"
          id="name"
          placeholder="Your Name"
        />
        <label htmlfor="password">Last Name</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Your last name"
        />
        <label htmlfor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
        />
        
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch("sign in")}>
        Already have an account? Sign in.
      </button>
    </div>
  );
}

export default Register;
