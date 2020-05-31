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

export default function Project({ match }) {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { global, setGlobal } = useContext(GlobalContext);
  const [isLoading, data, error] = useApi(
    API.getProjectById,
    match.params.project
  );

  useEffect(() => {
    setGlobal({ ...global, currentProject: match.params.project });
    if (data) {
      setFormValues({
        ...formValues,
        projectName: data.name,
      });
    }
  }, [data]);

  return (
    <div className='project'>
      {isLoading && <Mask />}
      {data && <Toolbar name={data.name} projectId={match.params.project} />}
      {/* {data && <h2 className='projectDetails'>Project Details:</h2>} */}
      {data && (
        <Form className='edit-project-form' submitFunction='updateProject'>
          <FieldGroup
            type='text'
            label='Name'
            name='projectName'
            placeholder='Enter a name for your new project'
          />
          <SubmitButton className='edit-project-footer edit-project-submit-button'>
            Save
          </SubmitButton>
        </Form>
      )}
    </div>
  );
}
