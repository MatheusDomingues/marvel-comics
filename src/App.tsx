import React, { useEffect, useState } from 'react';

import api from './services/api';

import Routes from './routes';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/')
      setPosts(response.data)
      console.log(response.data)
    }
    loadPosts()
  }, [])

  return (
    <Routes />
  );
}

export default App;
