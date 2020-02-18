import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ClothesPage = () => (
  <div>
    <h1>CLOTHES PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/clothes' component={ClothesPage}/>
      </Switch>
    </div>
  );
}

export default App;
