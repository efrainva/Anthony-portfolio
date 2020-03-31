import React from 'react';
import './nav-footer.css'
const Nav = () => {

  return(<section className='whole'>
    <a href='/home'> icon </a>
    <div className='right-nav-panel'>
      <a className='nav-word' href='/'> Portfolio</a>
      <a className='nav-word' href='/'> About Me</a>
    </div>
  </section>)
} 
export default Nav;