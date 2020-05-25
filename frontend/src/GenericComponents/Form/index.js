import './style.css';
import React from 'react';
import useForm from '../../Hooks/useForm';
import Mask from '../Mask';
import { Redirect } from 'react-router-dom';

export default function Form({
  children,
  submitFunction,
  className,
  currentProject,
}) {
  const { handleSubmit, isSubmitting, data } = useForm(submitFunction);

  if (submitFunction == 'createProject' && data) {
    return <Redirect to='/dashboard' />;
  }
  if (submitFunction == 'createTest' && data) {
    return <Redirect to={`/projects/${currentProject}`} />;
  }

  return (
    <div>
      <form className={`${className} form`} onSubmit={handleSubmit} noValidate>
        {isSubmitting && <Mask />}
        {children}
      </form>
    </div>
  );
}
