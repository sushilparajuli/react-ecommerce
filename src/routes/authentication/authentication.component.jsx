import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
