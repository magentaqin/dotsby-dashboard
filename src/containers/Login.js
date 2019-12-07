import React from 'react';
import { Form } from 'antd';
import AuthForm from '../components/AuthForm';

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h1>Dotsby Dashboard</h1>
        <WrappedAuthForm
          submitText="Login"
          navToText="Sign Up"
          navToPath="/signup"
        />
      </div>
    </div>
  )
}

export default LoginPage;