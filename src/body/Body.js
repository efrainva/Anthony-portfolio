import React from 'react';

import Drawing from '../Anthonydrawing.png'
import iphone from '../Iphone.png'

import './body.css'
const Body = () => {
  return(<div className='landing-page'>
  
    <section className='top-landing-sec'>
      <div className='name-container'>
        <h1 className='name'>Anthony Holder</h1>
        <p className='tony-text-one'>
          I’m a UX/UI designer from Panama. 
          I have a creative and curious mind and a love for art, 
          design, and technology. 
        </p>
      </div>
      <img className='tonys-drawing' src={Drawing} alt='portrait'/>
    </section>

    <section className='bottom-landing-sec'>
      <div className='left-contain-phone'>
        <h1 className='projects'>Projects</h1>
        <img  className='tony-iphone' src={iphone} alt='iphone-pic'/>
      </div>
      
      <div className='anywhere-fit'>
        <h2>Anywhere Fitness</h2>
        <p className='anywhere-p'> 
          An app to help users 
          find fitness classes hosted by local instructors.
        </p>
        <h3>View Case Studies</h3>
      </div>
    </section>

  </div>)
}
export default Body;