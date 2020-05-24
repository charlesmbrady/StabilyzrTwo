import './style.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { FormValuesContext } from '../../Contexts/FormValuesContext';
import { FormErrorsContext } from '../../Contexts/FormErrorsContext';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import UnevenHTrack from '../../GenericComponents/UnevenHTrack';

export default function Header({ className }) {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { formErrors, setFormErrors } = useContext(FormErrorsContext);
  const { user, setUser } = useContext(UserContext);
  const { global, setGlobal } = useContext(GlobalContext);

  const logout = () => {
    API.logout().then((res) => {
      if (res.status == 200) {
        setUser({ ...user, isAuthenticated: false, isCreated: false });
      }
    });
  };

  // clear form values when any page navigation is clicked
  const clearForm = () => {
    setGlobal({ ...global, isSubmitting: false });
    let tempValues = { ...formValues };
    // let tempErrors = { ...formErrors };

    // for each key in the form values array, set the value to null
    for (let [key, value] of Object.entries(tempValues)) {
      tempValues[key] = null;
    }
    setFormValues({});

    // for each key in the form errors array, set the value to null
    // for (let [key, value] of Object.entries(tempErrors)) {
    //   tempErrors[key] = null;
    // }
    setFormErrors({});
  };

  return (
    <div className={`${className} header`}>
      <UnevenHTrack className='header-track'>
        <Link className='home-link' to='/'>
          <h2 className='logo'>MERNolithic</h2>
        </Link>
        {!user.isAuthenticated && (
          <Link
            onClick={() => clearForm()}
            className='headerLink'
            data-test='login-navlink'
            to='/login'
          >
            Login
          </Link>
        )}
        {!user.isAuthenticated && (
          <Link
            className='headerLink'
            data-test='register-navlink'
            to='/register'
            onClick={() => clearForm()}
          >
            Register
          </Link>
        )}

        {user.isAuthenticated && (
          <Link
            className='headerLink'
            to='/dashboard'
            onClick={() => clearForm()}
          >
            Dashboard
          </Link>
        )}
        {user.isAuthenticated && (
          <button
            className='headerLink'
            data-test='logout-button'
            onClick={() => logout()}
          >
            Logout
          </button>
        )}
      </UnevenHTrack>
    </div>
  );
}
