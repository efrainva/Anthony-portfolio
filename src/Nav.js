import React from 'react';
import './nav-footer.css'
import icon from'./Frame1.png'

const Nav = () => {

  return(<section className='whole'>
    <a href='/'> <img src={icon} alt='icon'/></a>
    <div className='right-nav-panel'>
      <a className='nav-word' href='/portfolio'> Portfolio</a>
      <a className='nav-word' href='/'> About Me</a>
    </div>
  </section>)
} 
export default Nav;