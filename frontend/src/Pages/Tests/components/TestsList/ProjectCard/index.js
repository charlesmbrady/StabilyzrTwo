import './style.css';
import React from 'react';

export default function ProjectCard({ data }) {
  return (
    <div className='projectCard'>
      <h2 data-test='project-name'>{data.name}</h2>
    </div>
  );
}
