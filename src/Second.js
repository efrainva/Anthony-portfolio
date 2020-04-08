import React from 'react';

import tonypic from './Ellipse1.png'
// this component uses the body css style sheet
import './body.css'
const Second = ()=> {

  return(<div className='second'>
    <img  className='tony-profile' src={tonypic} alt='selfie'/>
    <section className='second-p'>
      <h2>I'm Anthony Holder</h2>
      <p>I grew up with a passion for art, comic books, and technology. 
      In 2019 I joined the Lambda UX Design program to gain more knowledge and experience.
      <br/>
      <br/>
      My transition from artist to UX designer has been a fun and challenging one. 
      My new skills and mindset of helping users allows me to create designs that are modern and functional
      <br/>
      <br/> In my free time, I enjoy drawing, 
      listen to music, play video games, 
      and watch football (soccer).
      </p>
      <h3>Contact</h3>
      <h3>View Work</h3>
    </section>
  </div>)
}

export default Second;