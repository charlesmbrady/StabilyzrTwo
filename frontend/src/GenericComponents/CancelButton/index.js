import './style.css';
import React from 'react';

export default function CancelButton({ children, className }) {
  return (
    <button className={`${className} cancelButton`} data-test='cancel-button'>
      {children}
    </button>
  );
}
