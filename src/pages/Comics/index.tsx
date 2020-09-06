import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Footer from '../../components/Footer';

import comicImage from '../../assets/images/comic.jpg';

import Slider from 'react-slick';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface HeroProps {
  id: number;
  name: string;
  comic: [];
  resourceURI: string;
  description: string;
};

const Comics: React.FC<HeroProps> = () => {
  const [heroes, setHeroes] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function loadHeroes() {
      const res = await api.get('');
 
      setHeroes(res.data.data.results);
    };

    loadHeroes();

  }, []);

  async function loadComics() {
    const res = await api.get('');

    for (let hero in heroes) {
      setComics(res.data.data.results[hero].comic);
    };
  };

  loadComics();

  let settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="page-comics">
      <main>

        <article className="hero-item">
          <div className="hero-name">
            <h2>Mystery Men</h2>
          </div>
          <Slider {...settings}>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
          </Slider>
        </article>

        <article className="hero-item">
          <div className="hero-name">
            <h2>3D-Man</h2>
          </div>
          <Slider {...settings}>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>

            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
            <div className="comic-card">
              <img src={comicImage} alt="Comic-name"/>
              <p>Avengers: The Beginner</p>
            </div>
            
          </Slider>
        </article>

      </main>

      <Footer />
    </div>
  );
};

export default Comics;