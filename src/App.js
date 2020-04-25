import React from 'react';

import Nav from './body/Nav';
import Footer from './body/Footer';
import Body from './body/Body';
import about from './body/aboutme'
import Third from './body/Third'
import {Switch,Route} from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div className="App">
        <Nav/>
      <Switch>
        <Route exact path='/portfolio' component={Body} />
        <Route path='/about' component={about}/>
        <Route path='/case1' component={Third} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
