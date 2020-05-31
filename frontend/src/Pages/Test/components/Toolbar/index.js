import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';
import { MdRemoveCircle } from 'react-icons/md';

export default function Toolbar({ testId, projectId }) {
  return (
    <UnevenTrack className='testToolbar toolbar'>
      <h1>Test #{testId}</h1>
      <Link
        className='toolbarLink'
        data-test='delete-test-button'
        to={`/projects/${projectId}/tests/${testId}/confirm`}
      >
        <MdRemoveCircle color='red' className='icon' />
      </Link>
    </UnevenTrack>
  );
}
