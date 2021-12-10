import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./SignUp.styles.scss";

const Signup = () => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = currentUser;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfile(user, { displayName });
      setCurrentUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "displayName") {
      setCurrentUser((prevState) => {
        return {
          ...prevState,
          displayName: value,
        };
      });
    }
    if (name === "email") {
      setCurrentUser((prevState) => {
        return {
          ...prevState,
          email: value,
        };
      });
    }
    if (name === "password") {
      setCurrentUser((prevState) => {
        return {
          ...prevState,
          password: value,
        };
      });
    }
    if (name === "confirmPassword") {
      setCurrentUser((prevState) => {
        return {
          ...prevState,
          confirmPassword: value,
        };
      });
    }
  };

  const { displayName, email, password, confirmPassword } = currentUser;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
