import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';
import { AiFillFileAdd } from 'react-icons/ai';
import { MdViewList } from 'react-icons/md';
import { MdRemoveCircle } from 'react-icons/md';

export default function Toolbar({ name, projectId }) {
  return (
    <UnevenTrack className='dashboardToolbar toolbar'>
      <h1>Project: {name}</h1>
      <Link
        className='toolbarLink'
        data-test='create-test-button'
        to={`/projects/${projectId}/tests/new`}
      >
        <AiFillFileAdd className='icon' />
      </Link>
      <Link
        className='toolbarLink'
        data-test='view-tests-button'
        to={`/projects/${projectId}/tests`}
      >
        <MdViewList className='icon' />
      </Link>
      <Link
        className='toolbarLink'
        data-test='delete-project-button'
        to={`/projects/${projectId}/confirm`}
      >
        <MdRemoveCircle color='red' className='icon' />
      </Link>
    </UnevenTrack>
  );
}
