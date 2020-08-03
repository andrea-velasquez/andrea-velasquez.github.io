import React, { Component } from 'react';
import './MainPhoto.scss';
import { ReactComponent as Clip } from '../../assets/images/icons/clip.svg';
import PolaroidFilm from '../PolaroidFilm/PolaroidFilm';
import Photo from '../../assets/images/me.jpg';

class MainPhoto extends Component {
  render() {
    return (
      <div id="MainPhoto">
        <Clip/>
        <PolaroidFilm src={Photo} width={"200rem"} caption=" "/>
      </div>
    );
  }
}

export default MainPhoto;