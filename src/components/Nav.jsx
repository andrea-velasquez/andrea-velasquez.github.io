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
    optionsCollapsed: false
  }
  
  handleWindowResize = () => {
    let menuCollapsed = this.state;
    if (xlScreenWidth > window.innerWidth && menuCollapsed)
      this.setState({menuCollapsed: true});
    else if (xlScreenWidth < window.innerWidth)
      this.setState({menuCollapsed: false});
  }

  handleScroll = (e) => {
    let optionsCollapsed = this.state;
    var currentPos = window.pageYOffset;

    optionsCollapsed = this.prev < currentPos; // scrolling down 

    if (this.state.optionsCollapsed !== optionsCollapsed
        && xlScreenWidth > window.innerWidth)
      this.setState({optionsCollapsed});

    this.prev = window.scrollY;
  }

  toggleMenu = () => {
    const menuCollapsed = !this.state.menuCollapsed;
    this.setState({ menuCollapsed });
  }

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

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
        <div className="nav__expand-button" onClick={this.toggleMenu}>
          { this.state.menuCollapsed
            ? <LeftArrow/>
            : <RightArrow/>
          }
        </div>
        { 
          <div className={`nav__links ${this.state.menuCollapsed? "collapsed" : ""}`}>
            {Object.keys(constants.sections).map((section, idx) => (
              <a key={idx} href={`#${capitalize(section)}`}>{constants.sections[section]}</a>
            ))}
          </div>
        }
        <div className={`nav__options ${this.state.optionsCollapsed? "collapsed" : ""}`}>
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
          {xlScreenWidth > window.innerWidth || <br />}
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
