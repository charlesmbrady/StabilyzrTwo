import './style.css';
import React from 'react';

export default function Hero({ children, mainItem, subItem, className }) {
  return (
    <div className={`${className} hero`}>
      {children}
      {mainItem}
      {subItem}
    </div>
  );
}
