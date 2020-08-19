import React, { Component } from "react";
import { ReactComponent as LeftArrow } from "../assets/images/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/images/icons/right-arrow.svg";
import { ReactComponent as SunIcon } from "../assets/images/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icons/moon.svg";
import { ReactComponent as PdfIcon } from "../assets/images/icons/pdf.svg";

const capitalize = (w) => {
  w = w[0].toUpperCase() + w.slice(1).toLowerCase();
  return w;
};

const xlScreenWidth = 1200;

class Nav extends Component {
  state = {
    menuCollapsed: false,
    optionsCollapsed: false,
  };

  handleWindowResize = () => {
    let menuCollapsed = this.state;
    if (xlScreenWidth > window.innerWidth && menuCollapsed)
      this.setState({ menuCollapsed: true });
    else if (xlScreenWidth < window.innerWidth)
      this.setState({ menuCollapsed: false });
  };

  handleScroll = (e) => {
    let optionsCollapsed = this.state;
    var currentPos = window.pageYOffset;

    optionsCollapsed = this.prev < currentPos && currentPos!==0; // scrolling down

    if (xlScreenWidth > window.innerWidth){
      if (this.state.optionsCollapsed !== optionsCollapsed)
        this.setState({ optionsCollapsed });
      if (!this.state.menuCollapsed)
        this.setState({ menuCollapsed: true });
    }

    this.prev = window.scrollY;
  };

  toggleMenu = () => {
    const menuCollapsed = !this.state.menuCollapsed;
    this.setState({ menuCollapsed });
  };

  scrollTo = (id) => {
    // using a polyfill for smooth scroll
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const {
      constants,
      otherLang,
      theme,
      onChangeLang,
      onChangeTheme,
      resume
    } = this.props;
    //onClick={}
    return (
      <nav id="nav">
        <div className="nav__collapse-button" onClick={this.toggleMenu}>
          {this.state.menuCollapsed ? <LeftArrow /> : <RightArrow />}
        </div>
        {
          <div
            className={`nav__menu ${
              this.state.menuCollapsed ? "collapsed" : ""
            }`}
          >
            {Object.keys(constants.sections).map((section, idx) => (
              <a key={idx}
              href={`#${capitalize(section)}`}
              onClick={() => this.scrollTo(capitalize(section))}
              >
                {constants.sections[section]}
              </a>
            ))}
          </div>
        }
        <div
          className={`nav__options
            ${ this.state.optionsCollapsed ? "hide-text" : "" }
            ${ this.state.menuCollapsed ? "visible" : "hidden" }`
          }
        >
          <div className="nav__option language">
            <button onClick={onChangeLang}>{capitalize(otherLang)}</button>
            <span>{constants.LANG}</span>
          </div>
          <div className="nav__option theme">
            <button onClick={(e) => onChangeTheme(e)}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <span>{constants.THEME}</span>
          </div>
          {xlScreenWidth > window.innerWidth || <br />}
          <div className="nav__option pdf">
            <a href={resume} download>
              <button>
                <PdfIcon />
              </button>
              <span>{constants.RESUME}</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
