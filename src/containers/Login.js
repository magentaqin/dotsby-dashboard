import React from 'react';
import { Form } from 'antd';
import { withRouter } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { loginApi } from '../service/request';

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

const LoginPage = (props) => {
  const onLogin = (values) => {
    loginApi(values).then(resp => {
      console.log(resp)
      props.history.push('/dashboard')
    }).catch(err => {
      console.log('login err', err);
    })
  }
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h1>Dotsby Dashboard</h1>
        <WrappedAuthForm
          submitText="Login"
          navToText="Sign Up"
          navToPath="/signup"
          onSubmit={onLogin}
        />
      </div>
    </div>
  )
}

export default withRouter(LoginPage);