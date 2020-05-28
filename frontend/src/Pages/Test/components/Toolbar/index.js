import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';

export default function Toolbar({ testId, projectId }) {
  return (
    <UnevenTrack className='testToolbar'>
      <h1>Test #{testId}</h1>
      <Link
        className='toolbarLink'
        data-test='delete-test-button'
        to={`/projects/${projectId}/test/${testId}confirm`}
      >
        Delete Test
      </Link>
    </UnevenTrack>
  );
}
