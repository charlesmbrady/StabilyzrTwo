import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { UserContext } from './Contexts/UserContext';
import { GlobalContext } from './Contexts/GlobalContext';
import { FormValuesContext } from './Contexts/FormValuesContext';
import { FormErrorsContext } from './Contexts/FormErrorsContext';
import API from './Utilities/API';
import useApi from './Hooks/useApi';

//********** Pages/Components **********//
import Mask from './GenericComponents/Mask';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

export default function App() {
  const [isLoading, data, error] = useApi(API.checkToken);

  // Set UserContext provider values
  const [user, setUser] = useState({
    isAuthenticated: false,
    isCreated: false,
    firstName: null,
    lastName: null,
    email: null,
  });
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Set GlobalContext provider values
  const [global, setGlobal] = useState({
    isSubmitting: false,
    isLoading: false,
    leftDrawerOpen: false,
    rightDrawerOpen: false,
  });
  const globalValue = useMemo(() => ({ global, setGlobal }), [
    global,
    setGlobal,
  ]);

  // Set FormValuesContext provider values
  const [formValues, setFormValues] = useState({
    // All field names go here
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    agreement: null,
  });
  const formValuesValue = useMemo(() => ({ formValues, setFormValues }), [
    formValues,
    setFormValues,
  ]);

  // Set FormErrorsContext provider values
  const [formErrors, setFormErrors] = useState({});
  const formErrorsValue = useMemo(() => ({ formErrors, setFormErrors }), [
    formErrors,
    setFormErrors,
  ]);

  return (
    <UserContext.Provider value={userValue}>
      <GlobalContext.Provider value={globalValue}>
        <FormValuesContext.Provider value={formValuesValue}>
          <FormErrorsContext.Provider value={formErrorsValue}>
            <Router>
              <div className='main-container'>
                {isLoading && <Mask />}
                <Header />
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />

                  <Route path='/' component={Home} />
                </Switch>
              </div>
            </Router>
          </FormErrorsContext.Provider>
        </FormValuesContext.Provider>
      </GlobalContext.Provider>
    </UserContext.Provider>
  );
}
