import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import marvelLogo from '../../assets/images/marvel-logo.png';

import './styles.css';

function Home() {
  return (
    <div id="page-home">
      <div id="page-home-content" className="container">
        <div className="logo-container">
          <img src={marvelLogo} alt="Marvel"/>
        </div>
        <div className="text-container">
          <h1>Bem-vindo ao My Marvel Comics!</h1>
          <h3>Explore o site e leia seu quadrinho favorito!</h3>
        </div>
        <div className="button-container">
          <Link to="/comics" className="comics">
            Comece a explorar!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;