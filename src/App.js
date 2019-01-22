import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <main>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export default App;
