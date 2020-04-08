import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import Body from './Body';
import about from './aboutme'
import Third from './Third'
import {Switch,Route} from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/portfolio' component={about}/>
        <Route path='/case1' component={Third} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
