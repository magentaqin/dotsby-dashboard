import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store';
import Signup from './containers/Signup'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import { getUserInfoApi } from './service/request';
import { setUserInfo } from './store/reducerActions/user'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const history = createBrowserHistory()

class Layout extends React.Component {
  state ={
    isLoading: true,
  }

  componentDidMount(){
    getUserInfoApi({ token: this.props.token}).then(resp => {
      this.props.setUserInfo(resp.data.data)
      this.setState({ isLoading: false })
    }).catch(err => {
      console.log('get user info err', err)
      this.setState({ isLoading: false })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <Router history={history}>
        <Switch>
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect to="/signup" />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    token: store.userReducer.token,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setUserInfo,
}, dispatch)

const ConnectedLayout = connect(mapStateToProps, mapDispatchToProps)(Layout);

const App = () => (
  <Provider store={store}>
    <ConnectedLayout />
  </Provider>
)

export default App;
