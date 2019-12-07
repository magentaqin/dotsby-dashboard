import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Signup from './containers/Signup'

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Redirect to="/signup" />
    </Switch>
  </Router>
)

export default App;
