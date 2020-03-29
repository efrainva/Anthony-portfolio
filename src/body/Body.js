import React from 'react';

import {Drawing} from '../Anthonydrawing.png'

const Body = () => {
  return(<>
    <section>
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
    <section>
      <h2>Projects</h2>

    </section>
  </>)
}
export default Body;