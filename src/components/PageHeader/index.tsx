import React from 'react';

import { NavLink } from 'react-router-dom';

import './styles.css';

function PageHeader() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <ul>
          <li><NavLink to="/comics" activeClassName="active">Comics</NavLink></li>
          <li><NavLink to="/details" activeClassName="active">Details</NavLink></li>
          <li><NavLink to="/read" activeClassName="active">Read</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default PageHeader;