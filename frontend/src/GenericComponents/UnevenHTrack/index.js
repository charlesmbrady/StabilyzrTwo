import './style.css';
import React from 'react';

export default function UnevenHTrack({ children, className }) {
  return (
    <div className={`${className} unevenTrack`}>
      {children &&
        children.length > 0 &&
        children.map((child, i) => (
          <div className='trackItemContainer' key={i}>
            {child}
          </div>
        ))}
    </div>
  );
}
