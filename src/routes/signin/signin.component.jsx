import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
