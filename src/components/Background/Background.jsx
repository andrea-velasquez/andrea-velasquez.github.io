import React, { Component } from 'react';
import './Background.scss';

import { ReactComponent as Folder } from '../../assets/images/background/folder.svg';
import { ReactComponent as Pen } from '../../assets/images/background/pen.svg';
import { ReactComponent as TypeWriter } from '../../assets/images/background/half-typewriter.svg';

class Background extends Component {
  render() {
    return (
      <React.Fragment>
        <Folder className="background__item folder"/>
        <Pen className="background__item pen"/>
        <TypeWriter className="background__item typewriter" />
      </React.Fragment>
    );
  }
}

export default Background;