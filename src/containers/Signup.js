import React from 'react';
import { Form } from 'antd';
import { withRouter } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { signupApi } from '../service/request'

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

const SignupPage = (props) => {
  const onSignup = (values) => {
    signupApi(values).then(resp => {
      props.history.push('/dashboard')
    }).catch(err => {
      console.log('sign up err', err)
    });
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h1>Dotsby Dashboard</h1>
        <WrappedAuthForm
          submitText="Sign Up"
          navToText="Login"
          navToPath="/login"
          onSubmit={onSignup}
        />
      </div>
    </div>
  )
}

export default withRouter(SignupPage);