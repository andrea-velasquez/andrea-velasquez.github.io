import React from 'react';
import './App.scss';

import Header from './Header/Header';
import Description from './Description/Description';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Work from './Work/Work';
import Interests from './Interests/Interests';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const App = () =>{
  return (
    <div className="paper">
      <Header/>
      <hr/>
      <Description/>
      <Education/>
      <Projects/>
      <Skills/>
      <Work/>
      <Interests/>
      <div className="thanks">
        <h2>Thanks for reading!</h2>
        <Logo/>
      </div>
    </div>
  );
}

export default App;
