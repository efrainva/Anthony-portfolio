import React from 'react';

import Drawing from '../Anthonydrawing.png'

import './body.css'
const Body = () => {
  return(<div className='landing-page'>
  
    <section className='top-landing-sec'>
      <div>
        <h1>Anthony Holder</h1>
        <p>
          I’m a UX/UI designer from Panama. 
          I have a creative and curious mind and a love for art, 
          design, and technology. 
        </p>
      </div>
      <img  src={Drawing} alt='portrait'/>
    </section>
    <section className='bottom-landing-sec'>
      <h2>Projects</h2>
      <h2>Anywhere Fitness</h2>
      <p>
        An app to help users 
        find fitness classes hosted by local instructors.
      </p>
      <h3>View Case Studies</h3>
    </section>
  </div>)
}
export default Body;