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
    languages: {
      category: "Languages",
      data: [
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
        }
      ]
    },
    frameworks: {
      category: "Frameworks",
      data: [
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
        }
      ]
    },
    databases: {
      category: "Databases",
      data: [
        {
          name: "PostgreSQL",
          level: "intermediate-advance",
        },
        {
          name: "MongoDB",
          level: "basic",
        }
      ]
    },
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
    let {languages, frameworks, databases} = this.state;
    let mainSkills = [languages, frameworks, databases];
    return (
      <section id="Skills">
        <h2 className="section__title">Skills</h2>
        <div className="section__content">
        {
        mainSkills.map( (skillCategory, catIdx) =>
          <div key={catIdx} className={`field field__group field__${skillCategory.category.toLowerCase()}`}>
            <h4 className="field__name">{skillCategory.category}</h4>
            <div className="field_text">
              {skillCategory.data.map((skill, skIdx) => (
                <div key={skIdx} className="field field__language">
                  <span>{skill.name}</span>
                  <div className="field__text">
                    <ProgressBar level={skill.level} />
                    <ReactSVG
                      src={this.logos[this.encode(skill.name)]}
                      className="logo"
                      wrapper="span"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
        }
          <div className="field field__others">
            <h4 className="field__name">Others:</h4>
            <p className="field__text">
              {this.state.others.join(" - ")}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
