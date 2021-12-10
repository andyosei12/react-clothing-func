import "./SignInPage.styles.scss";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/sign-up/SignUp";

const SignInPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SignInPage;
