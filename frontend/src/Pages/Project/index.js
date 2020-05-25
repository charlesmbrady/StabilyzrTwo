import './style.css';
import React from 'react';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';
import Mask from '../../GenericComponents/Mask';

import Toolbar from './Components/Toolbar';

export default function Project({ match }) {
  const [isLoading, data, error] = useApi(
    API.getProjectById,
    match.params.project
  );

  return (
    <div className='project'>
      {isLoading && <Mask />}
      {data && <Toolbar name={data.name} projectId={match.params.project} />}

      {/* {data && (
        <div className='projectDetails'>Project sDetails:{data.name}</div>
      )} */}
    </div>
  );
}
