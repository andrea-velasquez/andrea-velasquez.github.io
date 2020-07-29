import React, { Component } from 'react';
import './Nav.scss';
import { ReactComponent as SunIcon } from '../../assets/images/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icons/moon.svg';
import { ReactComponent as PdfIcon } from '../../assets/images/icons/pdf.svg';

class Nav extends Component {
  state = {
    sections: [
      "Description",
      "Education",
      "Projects",
      "Skills",
      "Experience",
      "Interests"
    ],
    currentTheme: "light"
  }
  render() {
    return (
      <nav>
        <div className="nav__links">
        {
          this.state.sections.map( (section) =>
            <a href={`#${section}`}>{section}</a>
          )
        }
        </div>
          <div className="nav__options">
          <div className="nav__option" id="language">
            <button>Es</button>
            <span>Lang</span>
          </div>
          <div className="nav__option" id="theme">
            <button>
            { this.state.currentTheme === "light"
              ? <MoonIcon/>
              : <SunIcon/>
            }
            </button>
            <span>Theme</span>
          </div>
          <br/>
          <div className="nav__option" id="pdf">
            <button><PdfIcon/></button>
            <span>PDF here!</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;