import React from 'react';
import { Form } from 'antd';
import AuthForm from '../components/AuthForm';

const WrapperSignupForm = Form.create({ name: 'signup' })(AuthForm);

const SignupPage = () => {
  return (
    <WrapperSignupForm
      submitText="Sign up"
      navToText="Login"
    />
  )
}

export default SignupPage;