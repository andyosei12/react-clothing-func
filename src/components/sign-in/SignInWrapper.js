import { Navigate } from "react-router-dom";

const SignInWrapper = ({ children, currentUser }) =>
  currentUser ? <Navigate exact to={"/"} replace /> : children;

export default SignInWrapper;
