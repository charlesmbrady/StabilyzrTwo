import React from 'react';
import Toolbar from './components/Toolbar';
import ProjectsList from './components/ProjectsList';

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <Toolbar />
      <ProjectsList />
    </div>
  );
}
