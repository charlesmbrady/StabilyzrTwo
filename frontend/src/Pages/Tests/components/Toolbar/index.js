import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';
import { AiFillFileAdd } from 'react-icons/ai';

export default function Toolbar({ projectId }) {
  return (
    <UnevenTrack className='testsToolbar toolbar'>
      <h1>Tests</h1>
      <Link
        className='toolbarLink'
        data-test='create-test-button'
        to={`/projects/${projectId}/tests/new`}
      >
        <AiFillFileAdd className='icon' />
      </Link>
    </UnevenTrack>
  );
}
