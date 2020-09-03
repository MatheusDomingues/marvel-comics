import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

import './styles.css';

function Comics() {
  return (
    <div id="page-comics">
      <PageHeader />
      <div id="page-comics-content" className="container">
        
      </div>
      <Footer />
    </div>
  );
};

export default Comics;