import './style.css';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Confirm() {
  let { project, test } = useParams();

  const { global, setGlobal } = useContext(GlobalContext);
  let submitFunction = '';
  useEffect(() => {
    setGlobal({
      ...global,
      currentProject: project,
      currentTest: test,
    });
  }, []);

  if (test != undefined || test != null) {
    submitFunction = 'deleteTest';
  } else {
    submitFunction = 'deleteProject';
  }

  return (
    <div className='confirm'>
      <Form className='delete-confirm-form' submitFunction={submitFunction}>
        <h2 className='delete-confirm-header'>
          Are you sure you want to delete this item?
        </h2>

        <SubmitButton
          data-test='confirm-delete-button'
          className='delete-confirm-footer delete-confirm-submit-button'
        >
          Delete
        </SubmitButton>
      </Form>
    </div>
  );
}
