import React from 'react';

import './styles.css';

export interface HeroProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: any;
  };
  comics: {
    items: [];
  };
};

interface Hero {
  hero: HeroProps;
}

const Hero: React.FC<Hero> = ({ children, hero }) => {
  return(
    <article className="hero-item">
      <div className="hero-name">
        <h2>{hero.name}</h2>
      </div>
      {children}
    </article>
  );
};

export default Hero;