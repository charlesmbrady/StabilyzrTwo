import './style.css';
import React, { useContext } from 'react';
import useForm from '../../Hooks/useForm';
import Mask from '../Mask';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';

export default function Form({
  children,
  submitFunction,
  className,
  currentProject,
}) {
  const { global, setGlobal } = useContext(GlobalContext);
  const { handleSubmit, isSubmitting, data } = useForm(submitFunction);

  if (submitFunction == 'createProject' && data) {
    return <Redirect to='/dashboard' />;
  }
  if (submitFunction == 'createTest' && data) {
    return <Redirect to={`/projects/${global.currentProject}`} />;
  }
  if (submitFunction == 'deleteProject' && data) {
    return <Redirect to={`/dashboard`} />;
  }
  if (submitFunction == 'deleteTest' && data) {
    return <Redirect to={`/projects/${global.currentProject}/tests`} />;
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
