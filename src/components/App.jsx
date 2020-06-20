import React from 'react';
import './App.scss';

import Header from './Header/Header';
import Description from './Description/Description';
import Education from './Education/Education';
import Projects from './Projects/Projects';

const App = () =>{
  return (
    <div className="paper">
      <Header/>
      <hr/>
      <Description/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
