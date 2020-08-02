import React from 'react';
import './App.scss';

import Header from './Header/Header';
import Description from './Description/Description';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Interests from './Interests/Interests';
import Nav from "./Nav/Nav";
import Background from "./Background/Background";

import { ReactComponent as Logo } from '../assets/images/logo.svg';

const App = () =>{
  return (
    <div id="app">
      <Background />
      <Nav />
      <div className="paper">
        <Header />
        <hr />
        <Description />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Interests />
        <div className="thanks">
          <h2>Thanks for reading!</h2>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default App;
