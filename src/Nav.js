import React from 'react';
import './nav-footer.css'
import icon from'./Frame1.png'
import {NavLink} from 'react-router-dom'
const Nav = () => {

  return(<section className='whole'>
    <a href='/'> <img src={icon} alt='icon'/></a>
    <div className='right-nav-panel'>
      <NavLink className='nav-word' href='/portfolio'> Portfolio</NavLink>
      <NavLink className='nav-word' href='/'> About Me</NavLink>
    </div>
  </section>)
} 
export default Nav;