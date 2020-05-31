import './style.css';
import React from 'react';

export default function ProjectCard({ data }) {
  return (
    <div className='projectCard'>
      <h1 className='projectName' data-test='project-name'>
        {data.name}
      </h1>
    </div>
  );
}
