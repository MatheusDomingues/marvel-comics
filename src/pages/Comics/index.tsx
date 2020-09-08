import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Hero, { HeroProps } from '../../components/Hero';
import Carousel from '../../components/Carousel';
import Modal from '../../components/Modal';
import Footer from '../../components/Footer';

import comic from '../../assets/images/comic.jpg';

import './styles.css';

function Comics() {
  const [heroes, setHeroes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Chamar a API e salvar todos os herois
  useEffect(() => {

    async function loadHeroes() {
      const res = await api.get('');
      setHeroes(res.data.data.results);
    };

    loadHeroes();
  }, []);

  return (
    <div id="page-comics">

      <main>
        {heroes.map((hero: HeroProps) => {
          return(
            <Hero key={hero.id} hero={hero}>
              <Carousel>
                {hero.comics.items.map(() => {
                  return(
                    <div className="comic-card" onClick={() => {setModalVisible(true)}}>
                      <img src={comic} alt={hero.name} />
                      <p>{hero.name}</p>
                    </div>
                  );
                })}
              </Carousel>
            </Hero>
          );
        })}
      </main>

      <Footer />
      
      {modalVisible ?
        <Modal 
          onClose={() => {setModalVisible(false)}}
          name='name'
          author="Stan Lee"
          description=' '
        />
      : null}
    </div>
  );
};

export default Comics;