import React from 'react';
import { Form } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthForm from '../components/AuthForm';
import { signupApi } from '../service/request'

import { setUserInfo } from '../store/reducerActions/user'

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

const SignupPage = (props) => {
  const onSignup = (values) => {
    signupApi(values).then(resp => {
      props.setUserInfo(resp.data.data)
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setUserInfo,
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(SignupPage));