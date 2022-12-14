/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import {SignUpContainer} from './sign-up-form.styles.jsx';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

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
    if (password !== confirmPassword) {
      console.error('Both password should be same');
      return;
    }

    try {
      dispatch (signUpStart(email, password, displayName));
      resetFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.error('User creation encounter error', err);
      }
    }

   

    // try {
    //   // create user with email password
    //   const { user } = await createAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   // insert into user db collections
    //   const userRef = await createUserDocumentFromAuth(user, { displayName });
    //   console.info('User created successfully', userRef);
    //   resetFields();
    // } catch (err) {
    //   if (err.code === 'auth/email-already-in-use') {
    //     alert('Cannot create user, email already in use');
    //   } else {
    //     console.error('User creation encounter error', err);
    //   }
    // }
  };

  return (
    <SignUpContainer>
      <h2>Don&apos;t have an account ? </h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button  type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
