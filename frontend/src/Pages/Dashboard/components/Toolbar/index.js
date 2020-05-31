import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UnevenTrack from '../../../../GenericComponents/UnevenHTrack';
import { IoIosCreate } from 'react-icons/io';

export default function Toolbar() {
  return (
    <UnevenTrack className='dashboardToolbar toolbar'>
      <h2>Projects</h2>
      <Link
        className='toolbarLink'
        data-test='toolbar-create-project-button'
        to='/projects/new'
      >
        <IoIosCreate className='icon' />
      </Link>
    </UnevenTrack>
  );
}
