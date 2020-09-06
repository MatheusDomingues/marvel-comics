import React, { useState } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import Heroes, { Heroe } from '../../components/Heroes';

import './styles.css';
export default class Comics extends React.Component {
  state: any = {
    data: null,
  };

  async componentDidMount() {
    const res = await api.get('');

    this.setState({ data: res.data.data.results });
  };
  
  render() {
    const [heroes, setHeroes] = useState([]);
    setHeroes(this.state.data);

    console.log(heroes);
    
    return (
      <div id="page-comics">
        <PageHeader />

        <main>
          {heroes.map((heroe: Heroe) => {
            return <Heroes key={heroe.id} heroe={heroe} />;
          })}
        </main>

        <Footer />
      </div>
    );
  };
};