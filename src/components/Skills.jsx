import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import ProgressBar from "./ProgressBar";


const reqLogosSvgs = require.context("../assets/images/brand-logos", false, /\.svg$/);

let reqToObject = (req) => {
  return req.keys().reduce((obj, path) => {
    let name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    obj[name] = req(path);
    return obj;
  }, {});
};

class Skills extends Component {
  logos = reqToObject(reqLogosSvgs);

  encode = (n) => {
    return n.toLowerCase()
        .replace(" ", "-")
        .replace("/", "-")
        .replace(".", "");
  }

  render() {
    let {languages, frameworks, databases, others} = this.props.content;
    let {constants} = this.props;
    let mainSkills = [languages, frameworks, databases];
    return (
      <section id="Skills">
        <h2 className="section__title">{constants.SKILLS}</h2>
        <div className="section__content">
        {
        mainSkills.map( (skillCategory, catIdx) =>
          <div key={catIdx} className={`field field__group field__${skillCategory.category.toLowerCase()}`}>
            <h4 className="field__name">{constants[skillCategory.category]}</h4>
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
            <h4 className="field__name">{constants.OTHERS}:</h4>
            <p className="field__text">
              {others.join(" - ")}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
