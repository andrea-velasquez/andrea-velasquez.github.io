import React, { Component } from 'react';
import { ReactComponent as Clip } from '../assets/images/icons/clip.svg';
import PolaroidFilm from './PolaroidFilm';
import Photo from '../assets/images/me.jpg';

class MainPhoto extends Component {
  render() {
    return (
      <div id="MainPhoto">
        <Clip/>
        <PolaroidFilm src={Photo}/>
      </div>
    );
  }
}

export default MainPhoto;