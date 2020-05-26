import './style.css';
import React from 'react';
import useApi from '../../../../Hooks/useApi';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import API from '../../../../Utilities/API';
import Mask from '../../../../GenericComponents/Mask';

export default function ProjectsList() {
  const [isLoading, data, error] = useApi(API.getAllProjects);

  return (
    <div className='projectsList'>
      {isLoading && <Mask />}
      {data &&
        data.map((project, i) => (
          <div>
            <Link
              to={`/projects/${project.id}`}
              data-test={`project-card-${project.name}`}
            >
              <ProjectCard data={project} key={i} />
            </Link>
          </div>
        ))}
    </div>
  );
}
