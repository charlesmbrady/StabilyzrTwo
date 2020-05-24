import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import API from './Utilities/API';
import { UserContext } from './Contexts/UserContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
}
