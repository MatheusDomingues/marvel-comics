import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Comics from './pages/Comics';
import Read from './pages/Read';
import Details from './pages/Details';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/comics" component={Comics} />
      <Route path="/read" component={Read} />
      <Route path="/details" component={Details} />
    </BrowserRouter>
  );
};

export default Routes;