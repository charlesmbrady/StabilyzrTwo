import './style.css';
import React from 'react';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';
import Mask from '../../GenericComponents/Mask';

import Toolbar from './components/Toolbar';

export default function Test({ match }) {
  const [isLoading, data, error] = useApi(API.getTestById, match.params.test);

  return (
    <div className='test'>
      {isLoading && <Mask />}
      {/* {data && <Toolbar name={data.name} projectId={match.params.project} />} */}
      {data && <div className='testDetails'>Test Details:{data.subject}</div>}
    </div>
  );
}
