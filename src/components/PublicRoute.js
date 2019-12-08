import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ component, hasAuth, ...rest }) => {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(renderProps) =>
        !hasAuth ? (
          <Component {...renderProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = (store) => {
  return {
    hasAuth: store.userReducer.hasAuth,
  }
}

export default connect(mapStateToProps, null)(PublicRoute);