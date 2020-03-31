import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import Body from './body/Body';
import Second from './body/Second'
import {Switch,Route} from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/portfolio' component={Second}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
