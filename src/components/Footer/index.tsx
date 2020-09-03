import React from 'react';
import { Link } from 'react-router-dom';

import marvelLogo from '../../assets/images/marvel-logo.png'

import './styles.css';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <Link to="/comics">
          <img src={marvelLogo} alt="Marvel Logo"/>
        </Link>
        <p>This site was be created by <a href="http://matheusdomingues.github.io/" target="_blank" rel="noopener noreferrer">Matheus Domingues</a> &reg;</p>
      </div>
    </footer>
  );
};

export default Footer;