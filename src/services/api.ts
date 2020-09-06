import axios from 'axios';
import md5 from 'js-md5';

const publicKey =  '416040b063fa3cd6a75c38533064e666';
const privateKey = '06bfb857ed2117893b1d472534472dedd6f225e1';

const timestamp = Number(new Date());
const hash = md5.create();

hash.update(timestamp + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=3`,
});

export default api;