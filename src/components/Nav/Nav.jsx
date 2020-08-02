import React, { Component } from 'react';
import './Nav.scss';
import { ReactComponent as SunIcon } from '../../assets/images/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icons/moon.svg';
import { ReactComponent as PdfIcon } from '../../assets/images/icons/pdf.svg';

const capitalize = (w) => {
  w = w[0].toUpperCase() + w.slice(1);
  return w;
}

class Nav extends Component {
  state = {
    currentTheme: "light"
  }

  render() {
    const { constants, content, onChangeLang, otherLang } = this.props;
    return (
      <nav id="nav">
        <div className="nav__links">
        {
          content.sections.map( (section) =>
            <a href={`#${section}`}>{section}</a>
          )
        }
        </div>
          <div className="nav__options">
          <div className="nav__option" id="language">
            <button onClick={onChangeLang}>{capitalize(otherLang)}</button>
            <span>{constants.LANG}</span>
          </div>
          <div className="nav__option" id="theme">
            <button>
            { this.state.currentTheme === "light"
              ? <MoonIcon/>
              : <SunIcon/>
            }
            </button>
            <span>{constants.THEME}</span>
          </div>
          <br/>
          <div className="nav__option" id="pdf">
            <button><PdfIcon/></button>
            <span>{constants.PDF_HERE}</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;