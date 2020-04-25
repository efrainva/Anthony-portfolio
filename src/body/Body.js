import React,{ useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import Drawing from '../pictures/Anthonydrawing.png'
import iphone from '../pictures/Iphone.png'
import arrow from '../pictures/arrow 4.png'

import '../index.css'
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
    <link href="//db.onlinewebfonts.com/c/7d349f3b93cd47712cf75443b05965bf?family=NeueHaasUnicaW1G-Medium" rel="stylesheet" type="text/css"/>
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

    <section className='bottom-landing-sec'   >
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
        <button className='button'>

        <NavLink  to='/case1'> View Case Studies</NavLink>
        </button>
      </div>
    </section>

  </div>)
}
export default Body;