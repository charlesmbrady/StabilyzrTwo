import './style.css';
import React from 'react';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function NewProject() {
  return (
    <div className='newProject'>
      <Form className='create-project-form' submitFunction='createProject'>
        <h2 className='create-project-header'>Create Project</h2>
        <FieldGroup
          type='text'
          label='Name'
          name='projectName'
          placeholder='Enter a name for your new project'
        />
        <SubmitButton className='create-project-footer create-project-submit-button'>
          Submit
        </SubmitButton>
      </Form>
    </div>
  );
}
