import './style.css';
import React from 'react';
import Hero from '../../GenericComponents/Hero';

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='contentContainer'></div>
      <footer className='footer'>
        <h3 className='mernolithic-info'>
          This project was made with the{' '}
          <a
            href='https://github.com/charlesmbrady/MERNolithic_sql'
            target='_blank'
          >
            MERNolithic
          </a>{' '}
          starter project, developed by Charles Brady.
        </h3>
        <h2 className='head'>
          <a href='https://github.com/charlesmbrady/MERNolithic_sql'>
            Get Started
          </a>{' '}
          with MERNolithic!
        </h2>
      </footer>
    </div>
  );
}
