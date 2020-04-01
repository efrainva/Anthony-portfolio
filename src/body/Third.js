import React from 'react';

import phone1 from '../HomePage.png'
import phone2 from '../CategoriespageUnselected.png';
import phone3 from '../SelectAccountType.png';
import benjones from '../Proto-Persona-Instructor.png'

import './third.css'
const Third =()=>{
  return(<>
    <section className='Role-block'>
      <title>Role:</title>
      <p>UX/UI designer</p>
      <title>Duration:</title>
      <p>6 weeks</p>
      <title>Project:</title>
      <p>Lambda School Build Project</p>
      <title>Overview:</title>
      <p>Anywhere Fitness is an app that helps users find fitness classes available in their area. The app will also help local instructors by giving them tools to post and edit their classes.</p>
    </section>
    <section className='anywhere-3'>
      <img src={phone1} alt='phone-display1'/>
      <img src={phone2} alt='phone-display2'/>
      <img src={phone3} alt='phone-display3'/>
    </section>
    <section className='how-to-help'>
      <h2>How to help users?</h2>
      <p>
        To get a better insight from the users, I ran several interviews with participants that have attended or currently attend a fitness class and participants that teach fitness classes. This process helped find key pain points.
      </p>
    </section>
    <section className='ben-jones'>
      <img src={benjones} alt='picture of ben jones'/>
      <p>
        I was having a hard time focusing on my research, and There were a lot of issues the users are experiencing and needed to prioritize those issues. To help me with this, I created proto-personas for each user type. The personas were created based on the feedback received from interviews and surveys. It helped me see how each issue can affect the users and possible ways to solve them.
      </p>
    </section>
    <section className='jorney-map'>

    </section>
    <section className='what-problems'>

    </section>
    <section className='how-are-the'>

    </section>

  </>)
}
export default Third;
