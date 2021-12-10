import { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.styles.scss";
import { signInWithEmailAndPassword } from "@firebase/auth";

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
  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <div className="title">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
      </div>

      <form onSubmit={submitFormHandler}>
        <FormInput
          name="email"
          type="email"
          onChangeHandler={inputChangeHandler}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          onChangeHandler={inputChangeHandler}
          value={password}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
