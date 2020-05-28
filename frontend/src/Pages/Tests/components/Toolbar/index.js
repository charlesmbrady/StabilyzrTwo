import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';

export default function Toolbar({ projectId }) {
  return (
    <UnevenTrack className='testsToolbar'>
      <h1>Tests</h1>
      <Link
        className='toolbarLink'
        data-test='toolbar-create-test-button'
        to={`/projects/${projectId}/tests/new`}
      >
        New Test
      </Link>
    </UnevenTrack>
  );
}
