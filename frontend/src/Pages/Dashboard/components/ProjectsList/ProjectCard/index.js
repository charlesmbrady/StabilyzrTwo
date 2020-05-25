import './style.css';
import React from 'react';

export default function ProjectCard({ data }) {
  return <div className='projectCard'>{data.name}</div>;
}
