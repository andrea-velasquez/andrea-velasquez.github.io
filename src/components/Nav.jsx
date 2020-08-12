import React, { Component } from "react";
import { ReactComponent as SunIcon } from "../assets/images/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icons/moon.svg";
import { ReactComponent as PdfIcon } from "../assets/images/icons/pdf.svg";

const capitalize = (w) => {
  w = w[0].toUpperCase() + w.slice(1).toLowerCase();
  return w;
};

class Nav extends Component {
  render() {
    const {
      constants,
      otherLang,
      theme,
      onChangeLang,
      onChangeTheme,
    } = this.props;

    return (
      <nav id="nav">
        <div className="nav__links">
          {Object.keys(constants.sections).map((section, idx) => (
            <a key={idx} href={`#${capitalize(section)}`}>{constants.sections[section]}</a>
          ))}
        </div>
        <div className="nav__options">
          <div className="nav__option" id="language">
            <button onClick={onChangeLang}>{capitalize(otherLang)}</button>
            <span>{constants.LANG}</span>
          </div>
          <div className="nav__option" id="theme">
            <button onClick={onChangeTheme}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <span>{constants.THEME}</span>
          </div>
          <br />
          <div className="nav__option" id="pdf">
            <button>
              <PdfIcon />
            </button>
            <span>{constants.PDF_HERE}</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
