import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'js-md5';

import axios from 'axios';

import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

import './styles.css';

const publicKey =  '416040b063fa3cd6a75c38533064e666';
const privateKey = '06bfb857ed2117893b1d472534472dedd6f225e1';
export default class Comics extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + privateKey + publicKey);

    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=3`)
    
    this.setState({ data: res.data.data.results });
  };
  
  render() {
    const heroes = this.state.data;

    console.log(heroes);

    return (
      <div id="page-comics">
        <PageHeader />
        <div id="page-comics-content" className="container">

        </div>
        <Footer />
      </div>
    );
  };
};