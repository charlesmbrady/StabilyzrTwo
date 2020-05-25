import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';

export default function Toolbar({ name, projectId }) {
  return (
    <UnevenTrack className='dashboardToolbar'>
      <h1>{name}</h1>
      <Link
        className='toolbarLink'
        data-test='createTest-button'
        to={`/projects/${projectId}/tests/new`}
      >
        Add Test
      </Link>
    </UnevenTrack>
  );
}
