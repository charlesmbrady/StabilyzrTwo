import './style.css';
import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Confirm({ match }) {
  const { global, setGlobal } = useContext(GlobalContext);

  useEffect(() => {
    setGlobal({ ...global, currentProject: match.params.project });
  }, []);

  return (
    <div className='confirm'>
      <Form
        className='delete-project-form'
        currentProject={match.params.project}
        submitFunction='deleteProject'
      >
        <h2 className='delete-project-header'>
          Are you sure you want to delete this project?
        </h2>

        <SubmitButton
          data-test='confirm-delete-button'
          className='delete-project-footer delete-project-submit-button'
        >
          Delete
        </SubmitButton>
      </Form>
    </div>
  );
}
