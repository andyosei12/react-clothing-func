import { useState } from "react";
import "./SignIn.styles.scss";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitFormHandler}>
        <input
          name="email"
          type="email"
          onChange={inputChangeHandler}
          value={email}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          onChange={inputChangeHandler}
          value={password}
          required
        />
        <label>Password</label>

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
