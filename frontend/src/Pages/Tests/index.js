import React from 'react';
import Toolbar from './components/Toolbar';
import TestsList from './components/TestsList';

export default function Tests({ match }) {
  return (
    <div className='testsContainer'>
      <Toolbar />
      <TestsList match={match} />
    </div>
  );
}
