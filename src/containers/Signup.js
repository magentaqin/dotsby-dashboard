import React from 'react';
import { Form, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthForm from '../components/AuthForm';
import { signupApi } from '../service/request'

import { setUserInfo } from '../store/reducerActions/user'

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

class SignupPage extends React.Component {
  state = {
    loading: false,
  }

  onSignup = (values) => {
    this.toggleLoading()
    signupApi(values).then(resp => {
      this.toggleLoading()
      this.props.setUserInfo(resp.data.data)
      this.props.history.push('/dashboard')
    }).catch(err => {
      this.toggleLoading()
      console.log('sign up err', err)
      message.error(err.data.message)
    });
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    return (
      <div className="auth-container">
        <div className="auth-wrapper">
          <h1>Dotsby Dashboard</h1>
          <WrappedAuthForm
            submitText="Sign Up"
            navToText="Login"
            navToPath="/login"
            onSubmit={this.onSignup}
            loading={this.state.loading}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setUserInfo,
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(SignupPage));