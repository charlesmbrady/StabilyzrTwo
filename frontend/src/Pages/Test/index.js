import './style.css';
import React, { useEffect, useContext } from 'react';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';
import Mask from '../../GenericComponents/Mask';

import Toolbar from './components/Toolbar';
import { FormValuesContext } from '../../Contexts/FormValuesContext';
import { GlobalContext } from '../../Contexts/GlobalContext';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Test({ match }) {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { global, setGlobal } = useContext(GlobalContext);
  const [isLoading, data, error] = useApi(API.getTestById, match.params.test);

  useEffect(() => {
    setGlobal({
      ...global,
      currentProject: match.params.project,
      currentTest: match.params.test,
    });
    if (data) {
      setFormValues({
        ...formValues,
        testSubject: data.subject,
        testDescription: data.description,
        testSteps: data.steps,
        testStatus: data.status,
        testType: data.type,
      });
    }
  }, [data]);

  return (
    <div className='test'>
      {isLoading && <Mask />}
      {data && <Toolbar testId={data.id} projectId={match.params.project} />}
      {/* {data && <h2 className='testDetails'>Test Details:</h2>} */}
      {data && (
        <Form className='edit-test-form' submitFunction='updateTest'>
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
          <SubmitButton className='edit-test-footer edit-test-submit-button'>
            Save
          </SubmitButton>
        </Form>
      )}
    </div>
  );
}
