import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Comics from './pages/Comics';
import Reader from './pages/Reader';
import Details from './pages/Details';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/comics" component={Comics} />
      <Route path="/reader" component={Reader} />
      <Route path="/details" component={Details} />
    </BrowserRouter>
  );
};

export default Routes;