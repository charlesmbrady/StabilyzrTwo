import './style.css';
import React from 'react';
import useApi from '../../../../Hooks/useApi';
import { Link } from 'react-router-dom';
import TestEntry from './TestEntry';
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
        data.map((test, i) => (
          <div>
            <Link
              to={`/projects/${match.params.project}/tests/${test.id}`}
              data-test={`test-list-entry`}
            >
              <TestEntry data={test} key={i} />
            </Link>
          </div>
        ))}
    </div>
  );
}
