import React from 'react';
import { Form, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import { loginApi } from '../service/request';
import { setUserInfo } from '../store/reducerActions/user'

const WrappedAuthForm = Form.create({ name: 'signup' })(AuthForm);

class LoginPage extends React.Component {
  state = {
    loading: false,
  }

  onLogin = (values) => {
    this.toggleLoading()
    loginApi(values).then(resp => {
      this.toggleLoading()
      this.props.setUserInfo(resp.data.data)
      this.props.history.push('/dashboard')
    }).catch(err => {
      this.toggleLoading()
      console.log('login err', err);
      message.error(err.data.message)
    })
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
            submitText="Login"
            navToText="Sign Up"
            navToPath="/signup"
            onSubmit={this.onLogin}
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

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));