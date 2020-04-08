import React,{ useEffect} from 'react';

import Drawing from '../Anthonydrawing.png'
import iphone from '../Iphone.png'
import arrow from '../Vector.png'

import './body.css'


// const scrollToRef = (ref) => window.scrollTo(2000, ref.current)   
const Body = () => {
  const theref = React.createRef()
  const scrollToRef=(el)=>{
    window.scrollTo(0,el.current.offsetTop)  
  }
  useEffect(()=>{
    
    scrollToRef(theref)
  },[])

  return(<div className='landing-page'>
  
    <section className='top-landing-sec' >
      <div className='name-container'>
        <h1 className='name'>Anthony Holder</h1>
        <p className='tony-text-one'>
          I’m a UX/UI designer from Panama. 
          I have a creative and curious mind and a love for art, 
          design, and technology. 
        </p>
<button onClick={()=>scrollToRef(theref)} >
        <img className='arrow-pic' src={arrow} alt ='down ward arrow'/>
  </button> 
      </div>
      <img className='tonys-drawing' src={Drawing} alt='portrait'/>
    </section>

    <a className='bottom-landing-sec' href='/case1'  >
      <div className='left-contain-phone'>
        <h1 className='projects'>Projects</h1>
        <img  className='tony-iphone' src={iphone} alt='iphone-pic'/>
      </div>

      <div className='anywhere-fit'>
        <h2 className='any-h2'>Anywhere Fitness</h2>
        <p className='anywhere-p' ref={theref}> 
          An app to help users 
          find fitness classes hosted by local instructors.
        </p>
        <h3>View Case Studies</h3>
      </div>
    </a>

  </div>)
}
export default Body;