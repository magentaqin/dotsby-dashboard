import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import store from './store';
import Signup from './containers/Signup'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/signup" />
      </Switch>
    </Router>
  </Provider>
)

export default App;
