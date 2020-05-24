import './style.css';
import React from 'react';
import useForm from '../../Hooks/useForm';

export default function Form({ children, submitFunction, className }) {
  const { handleSubmit } = useForm(submitFunction);

  return (
    <form className={`${className} form`} onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
}
