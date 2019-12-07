import React from 'react';
import { Form } from 'antd';
import AuthForm from '../components/AuthForm';

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

const SignupPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h1>Dotsby Dashboard</h1>
        <WrappedAuthForm
          submitText="Sign Up"
          navToText="Login"
          navToPath="/login"
        />
      </div>
    </div>
  )
}

export default SignupPage;