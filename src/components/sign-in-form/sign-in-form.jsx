import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import { AiFillGoogleCircle } from 'react-icons/ai/index';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFields();
    } catch (err) {
      switch (err.code) {
      case 'auth/wrong-password':
        alert('Incorrect password for the email');
        break;
      case 'auth/user-not-found':
        alert('No user associated with this email');
        break;
      default:
        console.log(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an Account </h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with Google
            <AiFillGoogleCircle />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
