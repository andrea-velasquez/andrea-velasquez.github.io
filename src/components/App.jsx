import React from 'react';
import './App.scss';

import Header from './Header/Header';
import Description from './Description/Description';

const App = () =>{
  return (
    <div className="paper">
      <Header/>
      <hr/>
      <Description/>
    </div>
  );
}

export default App;
