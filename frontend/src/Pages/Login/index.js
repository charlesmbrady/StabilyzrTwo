import './style.css';
import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Login() {
  const { user } = useContext(UserContext);

  if (user.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='login'>
      <Form className='login-form' submitFunction='authenticateUser'>
        <h2 className='login-header'>Login</h2>
        <FieldGroup
          type='text'
          label='Email'
          name='email'
          placeholder='Enter email address'
        />
        <FieldGroup
          type='password'
          label='Password'
          name='password'
          placeholder='Enter password'
        />
        <SubmitButton className='login-footer login-submit-button'>
          Submit
        </SubmitButton>
        <small className='login-footer'>
          <Link to='/register' data-test='login-to-register'>
            Don't have an account yet?
          </Link>
        </small>
      </Form>
    </div>
  );
}
