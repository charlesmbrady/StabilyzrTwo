import './style.css';
import React from 'react';

export default function SubmitButton({ children, className }) {
  return (
    <button
      type='submit'
      data-test='submit-button'
      className={`${className} submitButton`}
    >
      {children}
    </button>
  );
}
