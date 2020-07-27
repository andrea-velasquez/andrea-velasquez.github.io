import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Skills.scss";


const reqLogosSvgs = require.context("../../assets/images/brand-logos", false, /\.svg$/);

let reqToObject = (req) => {
  return req.keys().reduce((obj, path) => {
    let name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    obj[name] = req(path);
    return obj;
  }, {});
};

class Skills extends Component {
  // basic, intermediate, intermediate-advance, advance
  state = {
    languages: [
      {
        name: "HTML/CSS",
        level: "advance",
      },
      {
        name: "Python",
        level: "advance",
      },
      {
        name: "Node.js",
        level: "intermediate-advance",
      },
      {
        name: "SQL",
        level: "intermediate-advance",
      },
      {
        name: "C++",
        level: "intermediate-advance",
      },
      {
        name: "C",
        level: "intermediate",
      },
      {
        name: "Java",
        level: "basic",
      },
      {
        name: "Wolfram",
        level: "intermediate",
      },
      {
        name: "Go",
        level: "basic",
      },
      {
        name: "R",
        level: "basic",
      },
    ],
    frameworks: [
      {
        name: "Angular",
        level: "intermediate-advance",
      },
      {
        name: "React",
        level: "intermediate-advance",
      },
      {
        name: "Flask",
        level: "advance",
      },
      {
        name: "Django",
        level: "advance",
      },
      {
        name: "Springboot",
        level: "basic",
      },
      {
        name: "Vue.js",
        level: "basic",
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        level: "intermediate-advance",
      },
      {
        name: "MongoDB",
        level: "basic",
      },
    ],
    others: [
      "Git",
      "Docker",
      "AWS",
      "UNIX",
      "LaTeX",
      "Markdown",
      "Sass",
      "Raspberry Pi",
      "Game Maker",
      "Virtual machines",
    ],
  };

  logos = reqToObject(reqLogosSvgs);

  encode = (n) => {
    return n.toLowerCase()
        .replace(" ", "-")
        .replace("/", "-")
        .replace(".", "");
  }

  render() {
    return (
      <section id="Skills">
        <h2 className="section__title">Skills</h2>
        <div className="section__content">
          <div className="field field__group field__languages">
            <h4 className="field__name">Languages</h4>
            <div className="field_text">
              {this.state.languages.map((language) => (
                <div class="field field__language">
                  <span>{language.name}</span>
                  <div className="field__text">
                    <ProgressBar level={language.level} />
                    <ReactSVG
                      src={this.logos[this.encode(language.name)]}
                      className="logo"
                      wrapper="span"
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
          <div className="field field__group field__frameworks">
            <h4 className="field__name">Frameworks</h4>
            <div className="field_text">
              {this.state.frameworks.map((framework) => (
                <div class="field field__framework">
                  <span>{framework.name}</span>
                  <div className="field__text">
                    <ProgressBar level={framework.level} />
                    <ReactSVG
                      src={this.logos[this.encode(framework.name)]}
                      className="logo"
                      wrapper="span"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="field field__group field__databases">
            <h4 className="field__name">Databases</h4>
            <div className="field_text">
              {this.state.databases.map((database) => (
                <div class="field field__database">
                  <span>{database.name}</span>
                  <div className="field__text">
                    <ProgressBar level={database.level} />
                    <ReactSVG
                      src={this.logos[this.encode(database.name)]}
                      className="logo"
                      wrapper="span"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="field field__others">
            <h4 className="field__name">Others:</h4>
            <div className="field__text">
              {this.state.others.map((other, idx) => (
                  <span key={idx}>{other} {idx!==this.state.others.length-1 && "-"} </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
