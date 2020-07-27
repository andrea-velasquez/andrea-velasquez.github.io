import React from 'react';
import './App.scss';

import Header from './Header/Header';
import Description from './Description/Description';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const App = () =>{
  return (
    <div className="paper">
      <Header/>
      <hr/>
      <Description/>
      <Education/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
