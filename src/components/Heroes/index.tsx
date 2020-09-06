import React from 'react';

export interface Heroe {
  id: number;
  name: string;
  resourceURI: string;
  description: string;
};

interface HeroeProps {
  heroe: Heroe;
};

const Heroes: React.FC<HeroeProps> = ({ heroe }) => {
  return (
    <article className="heroe-item">
      <div className="heroe-name">
        <h2 className="name">{heroe.name}</h2>
      </div>
      <div className="carousel">

        <div className="image-content">
          <img src={heroe.resourceURI} alt={heroe.name}/>
          <p>{heroe.description}</p>
        </div>

      </div>
    </article>
  );
};

export default Heroes;