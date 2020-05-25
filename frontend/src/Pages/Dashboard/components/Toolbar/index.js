import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';

export default function Toolbar() {
  return (
    <UnevenTrack className='dashboardToolbar'>
      <h1>Projects</h1>
      <Link
        className='toolbarLink'
        data-test='createProject-button'
        to='/projects/new'
      >
        New Project
      </Link>
    </UnevenTrack>
  );
}
