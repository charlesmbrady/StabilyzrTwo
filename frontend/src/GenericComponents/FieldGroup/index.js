import './style.css';
import React from 'react';
import useForm from '../../Hooks/useForm';

export default function FieldGroup({
  children,
  type,
  label,
  name,
  placeholder,
  className,
}) {
  const { handleChange, handleCheckbox, formValues, formErrors } = useForm();
  let input;
  switch (type) {
    case 'text':
      input = (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={formErrors[name] ? 'invalidInput' : 'input'}
          value={formValues[name]}
          onChange={handleChange}
          data-test={`${name}-input`}
        />
      );
      break;

    case 'password':
      input = (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={formErrors[name] ? 'invalidInput' : 'input'}
          value={formValues[name]}
          onChange={handleChange}
          data-test={`${name}-input`}
        />
      );
      break;
    case 'checkbox':
      input = (
        <input
          type={type}
          name={name}
          className={formErrors[name] ? 'invalidInput' : 'input'}
          checked={formValues[name]}
          onChange={handleCheckbox}
          data-test={`${name}-input`}
        />
      );
      break;
    case 'textArea':
      input = (
        <textarea
          name={name}
          className={formErrors[name] ? 'invalidInput' : 'input'}
          value={formValues[name]}
          onChange={handleChange}
          data-test={`${name}-input`}
        ></textarea>
      );
      break;
    case 'select':
      let options;
      switch (name) {
        case 'testStatus':
          input = (
            <select
              name={name}
              value={formValues[name]}
              onChange={handleChange}
              data-test={`${name}-input`}
              className={formErrors[name] ? 'invalidInput' : 'input'}
            >
              <option value=''>--Please choose an option--</option>
              <option value='unwritten'>Unwritten</option>
              <option value='manual'>Manual</option>
              <option value='automated'>Automated</option>
            </select>
          );
          break;
        case 'testType':
          input = (
            <select
              name={name}
              value={formValues[name]}
              onChange={handleChange}
              data-test={`${name}-input`}
              className={formErrors[name] ? 'invalidInput' : 'input'}
            >
              <option value=''>--Please choose an option--</option>
              <option value='api'>API</option>
              <option value='unit'>Unit</option>
              <option value='e2e'>E2E</option>
            </select>
          );
          break;
      }
      break;
  }

  return (
    <div className={`${className} fieldGroup`}>
      {children}
      <label className='label' data-test={`${name}-label`}>
        {label}
      </label>
      {input}
      <small className='error' data-test={`${name}-error`}>
        {formErrors[name]}
      </small>
    </div>
  );
}
