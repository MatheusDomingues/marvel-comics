import axios from 'axios';

// const timeStamp = '1599001880';
// const apiKey =  '416040b063fa3cd6a75c38533064e666';
// const md5 = 'a48afa8616b23bd3c1ef367f7bbe9c66';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// http://gateway.marvel.com/v1/public/characters?ts=1599001880&apikey=416040b063fa3cd6a75c38533064e666&hash=a48afa8616b23bd3c1ef367f7bbe9c66

export default api;