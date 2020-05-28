import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';

export default function Toolbar() {
  return (
    <UnevenTrack className='dashboardToolbar'>
      <h1>Tests</h1>
      <Link
        className='toolbarLink'
        data-test='toolbar-create-project-button'
        to='/projects/new'
      >
        New Test
      </Link>
    </UnevenTrack>
  );
}
