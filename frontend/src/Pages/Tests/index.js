import React from 'react';
import Toolbar from './components/Toolbar';
import TestsList from './components/TestsList';

export default function Tests({ match }) {
  return (
    <div className='testsContainer'>
      <Toolbar projectId={match.params.project} />
      <TestsList match={match} />
    </div>
  );
}
