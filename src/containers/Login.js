import React from 'react';
import { Form, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import { loginApi } from '../service/request';
import { setUserInfo } from '../store/reducerActions/user'

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

const LoginPage = (props) => {
  const onLogin = (values) => {
    loginApi(values).then(resp => {
      props.setUserInfo(resp.data.data)
      props.history.push('/dashboard')
    }).catch(err => {
      console.log('login err', err);
      message.error(err.data.message)
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setUserInfo,
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));