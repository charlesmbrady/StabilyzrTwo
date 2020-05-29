import './style.css';
import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function NewTest({ match }) {
  const { global, setGlobal } = useContext(GlobalContext);

  useEffect(() => {
    setGlobal({ ...global, currentProject: match.params.project });
  }, []);

  return (
    <div className='newTest'>
      <Form
        className='create-project-form'
        currentProject={match.params.project}
        submitFunction='createTest'
      >
        <h2 className='create-project-header'>Add Test Case</h2>
        <FieldGroup
          type='text'
          label='Subject'
          name='testSubject'
          placeholder='Enter a subject for this test'
        />
        <FieldGroup
          type='textArea'
          label='Description'
          name='testDescription'
          placeholder='Enter a description for this test'
        />
        <FieldGroup
          type='textArea'
          label='Steps'
          name='testSteps'
          placeholder='Enter steps for this test'
        />
        <FieldGroup type='select' label='Type' name='testType' />
        <FieldGroup type='select' label='Status' name='testStatus' />
        <SubmitButton className='create-project-footer create-project-submit-button'>
          Submit
        </SubmitButton>
      </Form>
    </div>
  );
}
