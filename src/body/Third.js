import React from 'react';

import cover from '../pictures/Cover.png'

import phone1 from '../pictures/HomePage.png'
import phone2 from '../pictures/CategoriespageUnselected.png';
import phone3 from '../pictures/SelectAccountType.png';

import benjones from '../pictures/Proto-Persona-Instructor.png'
import journeyMap from '../pictures/Journey Map - Student 1 (1).png'
import brain from '../pictures/Screen Shot 2019-12-18 at 2.21 1.png'
import chart from '../pictures/Anywhere-1.png'
import long from '../pictures/screenshots-1.png'
import sketch from '../pictures/invite a friend 1 (1).png'

import colors from '../pictures/Color Styles 1 (1).png'
import textfont from '../pictures/Text Styles 1 (1).png'
import icons from '../pictures/Icons.png'
import screen1 from '../pictures/Classes Page.png'
import screen2 from '../pictures/SearchPage.png'
import screen3 from '../pictures/FilterPage.png'


import './third.css'
const Third =()=>{
  return(<div className='rest-third'>
    <img className='topbanner' src ={cover} alt='top banner'/>
    <section className='sc colum'>
      <div className='roles '>
      <h4 className='role-width'>Role:</h4>
      <p className='most-p'> UX/UI designer</p>
      </div>
      <div className='roles'>
      <h4 className='role-width'>Duration:</h4>
      <p className='most-p'>6 weeks</p>
      </div>
      <div className='roles'>
      <h4 className='role-width'>Project:</h4>
      <p className='most-p'>Lambda School Build Project</p>
      </div>
      <div className='roles'>
      <h4 className='role-width'>Overview:</h4>
      <p className='most-p'>
        Anywhere Fitness is an app that helps users find fitness classes available in their area.
        The app will also help local instructors by giving them tools to post and edit their classes.
      </p>
      </div>
    </section>

    <section className=' sc anywhere-3'>
      <img className='phones-3' src={phone1} alt='phone-display1'/>
      <img className='phones-3' src={phone2} alt='phone-display2'/>
      <img className='phones-3' src={phone3} alt='phone-display3'/>
    </section>

    {/* ------------------------------------------ */}
    <section className='right-p sc sep' >
   <section className='sc colum' >
      <h3>How to help users?</h3>
      <p className='most-p'>
        To get a better insight from the users, I ran several interviews with participants that have attended or currently attend a fitness class and participants that teach fitness classes.
        This process helped find key pain points.
      </p>
    </section>
      <div>

        <img className='ben' src={benjones} alt='ben jones'/>
        <h4>Instructor proto - persona</h4>
      </div>
      <p className='most-p'>
        I was having a hard time focusing on my research,
        and There were a lot of issues the users are experiencing and
        needed to prioritize those issues. To help me with this, I created proto-personas for each user type.
        The personas were created based on the feedback received from interviews and surveys.
        It helped me see how each issue can affect the users and possible ways to solve them.
      </p>
      <section className='right-p sc'>
        <p className='most-p'>
          Another struggle I was having is knowing how the users will be interacting with the app. 
          I created a journey map for each user type as a way to have a visual idea of how the user can accomplish a goal while using the app. 
          This exercise helped me think of other pain points the users might experience and possible solutions.
        </p>
        <div>

        <img src={journeyMap} alt='journey map'/>
        <h4>Client Journey map</h4>
        </div>
      </section>
    </section>
    {/* ------------------------------------------ */}
    <section className='right-p sc colum sep'>
      <div className='colum colum-w'>
        <h3>
          What Problems to solve?
        </h3>
        <p className='most-p'>Using the information gathered from the research, I ran a brainstorming exercise to write down all the issues our users could experience. This exercise helped me prioritize the problems that are affecting our users the most.</p>
        <p className='most-p'>I narrowed it down to four problems:</p>
        <ul>
          <li>How to help clients and instructors communicate?</li>
          <li>How to help users find classes that meet their needs?</li>
          <li>How to assist instructors with client attendance?</li>
          <li>How to motivate clients that don’t want to attend a class alone?</li>
        </ul>
      </div>
      <div className='horizontal'>
        <div className='list'> 
        <p className='most-p'>
          I used a mind-mapping exercise to help me come up with different solutions for each problem. 
          I decided to focus on these four features to resolve the problems found:
        </p>
        <ol>
          <li>
            Messaging feature
          </li>
          <li>
            Search feature
          </li>
          <li>
            Attendance tracking
          </li>
          <li>
            “Invite a friend” feature
          </li>
        </ol>
        </div>
        <div>
          <img src={brain} alt='mind map'/>
          <h4>Mind map example</h4>
        </div>
      </div>
    </section>
    {/* ------------------------------------------ */}
    <section className='right-p sc sep'>
      <div>

      <h3>
        How are the solutions going to work?
      </h3>
      <p className='most-p'>
        When I started working on the Anywhere Fitness app, I wanted to make an app that is fast and easy to use and navigate. I wanted every feature in the app to follow that same idea. To make sure I achieved that goal, I did more research and ideation to help me meet that goal.
      </p>
      </div>
      <div className='horizontal'>
        <p className='most-p ' >One of the struggles I had was making sure each feature worked as anticipated by the users. I asked several participants to do a card test, and this helped me understand what users expect from each element. With the feedback received, I did a site map exercise. This helped me visualize the way the users think and gave me an excellent foundation to start creating the features. </p>
        <div>
          <img src={chart} alt='chart'/>
          <h4>Site map example</h4>
        </div>
      </div>
      <div>
        <div>
          <img src={sketch} alt='sketch'/>
          <h4>Invite a friend feature sketches</h4>
        </div>
        <p className='most-p '>The hardest part of the process was coming up with a design flow that met the goal of creating something fast and easy to use.  I started the process by doing several sketches to give me a starting point of where I want to start my design.</p>
      </div>
    <p className='most-p p-left-m'>Based on my original sketches, I created low fidelity designs that helped me think of basic hierarchy and functionality. I created prototypes and usability tests and asked participants to take each test and offer feedback. The main goal is to solve a problem, and with the input received from the users, I had all the information needed to help me improve on my first design ideas.</p>
      <div>
      <img src={long} alt='multiple sketches'/>
      <h4>Low fidelity wireframes</h4>
      </div>
    </section>
    {/* ------------------------------------------ */}
    <section className='right-p sc sep'>
      <div className='colum '>
        <h3>How is the app going to look?</h3>
        <p className='most-p'>When working on the high fidelity design, I thought of elements that showed the main ideas behind the app. A product that is fast and easy to use while having a strong and minimal visual to represent something modern and athletic.</p>
      </div>
      <div className='horizontal'>
          <p className='most-p p-right-m'> I created a style guide for the brand using the shades of Black, White, and red. I decided to go with those colors as they represent strength and athletism. limiting the color styles to just three colors helped with giving the app a simple and minimal look</p>
          <div>
            <img className='colors' src={colors} alt='color style'/>
            <h4>Color style guide</h4>
          </div>
      </div>
      <div className='horizontal'>
        <div>
        <img className='font-style'src={textfont} alt='font-style'/>
            <h4>Text style guide</h4>

        </div>
        <p className='most-p p-left-m'>
        For the text style guide, I decided to go with Ubuntu and Poppins as they have several weights available, which made each font more dynamic. 
        <br/>
        I used Ubuntu for the logo text and Poppins for the body text. To keep the minimal style of the app, I limited the fonts to regular and bold weights and chose four font sizes, one for each text style.
        </p>
      </div>
      <div className='horizontal'>
          <p className='most-p p-right-m'>
            When choosing the icons, I looked for symbols that were easy to recognize and had a modern style. Selecting the right icons helped with the overall flow of the app as it limited the use of text and helped with spacing.
          </p>
          <div>
            <img src={icons} alt='icons' />
            <h4>Icons style guide</h4>
          </div>
      </div>
      
    </section>
    {/* ------------------------------------------ */}
    <section className='colum sc sep'>
      {/* <div className='colum'> */}

        <h3>
        Final Thoughts
        </h3>
        <p className='most-p'>
          Working on Anywhere Fitness showed me the importance of research and ideation in the design process. The goal of this project is to fix problems that our users were having while creating a design the was simple, efficient, modern, and functional. That goal was achieved, and I look forward to continuing iterating and creating a better experience for the users.
        </p>
      {/* </div> */}
      <div className='space'>
        <img src={screen1} alt='iphone-screen'/>
        <img src={screen2} alt='iphone-screen'/>
        <img src={screen3} alt='iphone-screen'/>
      </div>
    </section>

  </div>)
}
export default Third;
