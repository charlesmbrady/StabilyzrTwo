import './style.css';
import React from 'react';
import useApi from '../../../../Hooks/useApi';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import API from '../../../../Utilities/API';
import Mask from '../../../../GenericComponents/Mask';

export default function TestsList({ match }) {
  const [isLoading, data, error] = useApi(
    API.getAllTests,
    match.params.project
  );

  return (
    <div className='testsList'>
      {isLoading && <Mask />}
      {data &&
        data.map((project, i) => (
          <div>
            <Link to={`/projects/${project.id}`} data-test={`project-card`}>
              <ProjectCard data={project} key={i} />
            </Link>
          </div>
        ))}
    </div>
  );
}
