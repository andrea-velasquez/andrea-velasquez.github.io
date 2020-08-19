import React, { Component } from "react";

import Header from "./Header";
import Description from "./Description";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Interests from "./Interests";
import Nav from "./Nav";
import Background from "./Background";
import MainPhoto from "./MainPhoto";

import { ReactComponent as Logo } from "../assets/images/logo.svg";

// Language
import contentEn from "../content/en/content.json";
import constantsEn from "../content/en/constants.json";

import contentEs from "../content/es/content.json";
import constantsEs from "../content/es/constants.json";

const langContent = {
  en: {
    content: contentEn,
    constants: constantsEn,
  },
  es: {
    content: contentEs,
    constants: constantsEs,
  },
};

class App extends Component {
  state = {
    languages: ["es", "en"],
    curLanguage: "es",
    theme: "light",
  };

  onChangeLang = (lang) => {
    this.setState({ curLanguage: this.getOtherLang() });
  };

  onChangeTheme = (e) => {
    e.preventDefault();
    let isLight = this.state.theme === "light";
    let newTheme = isLight ? "dark" : "light";

    this.setState({ theme: newTheme });
  };

  getOtherLang = () => {
    return this.state.curLanguage === "es" ? "en" : "es";
  };

  render() {
    let { curLanguage, theme } = this.state;
    let curContent = langContent[curLanguage];
    return (
      <div className={`theme-${theme}`}>
        <div id="app">
          <Background />
          <Nav
            constants={curContent.constants.nav}
            onChangeLang={this.onChangeLang}
            onChangeTheme={this.onChangeTheme}
            otherLang={this.getOtherLang()}
            theme={theme}
          />
          <div className="paper">
            <MainPhoto />
            <Header constants={curContent.constants.header} />
            <hr />
            <Description
              content={curContent.content.description}
              constants={curContent.constants.description}
            />
            <Education
              content={curContent.content.education}
              constants={curContent.constants.education}
            />
            <Projects
              content={curContent.content.projects}
              constants={curContent.constants.projects}
            />
            <Skills
              content={curContent.content.skills}
              constants={curContent.constants.skills}
            />
            <Experience
              content={curContent.content.experience}
              constants={curContent.constants.experience}
            />
            <Interests
              content={curContent.content.interests}
              constants={curContent.constants.interests}
            />
            <div className="thanks">
              <h2>{curContent.constants.thanks.THANKS_READING}</h2>
              <Logo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
