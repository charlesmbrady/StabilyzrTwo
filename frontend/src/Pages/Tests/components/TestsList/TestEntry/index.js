import './style.css';
import React from 'react';

export default function TestEntry({ data }) {
  return (
    <div className='testEntry'>
      <h2 data-test='test-subject'>{data.subject}</h2>
    </div>
  );
}
