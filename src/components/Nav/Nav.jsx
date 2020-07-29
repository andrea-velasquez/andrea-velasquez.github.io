import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  state = {
    sections: [
      "Description",
      "Education",
      "Projects",
      "Skills",
      "Experience",
      "Interests"
    ]
    
  }
  render() {
    return (
      <nav>
      {
        this.state.sections.map( (section) =>
          <a href={`#${section}`}>{section}</a>
        )
      }
      </nav>
    );
  }
}

export default Nav;