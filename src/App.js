import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import Body from './body/Body';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
