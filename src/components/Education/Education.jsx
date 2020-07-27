import React, { Component } from "react";
import './Education.scss';
import PolaroidFilm from '../PolaroidFilm/PolaroidFilm';
import utecImg from '../../assets/images/utec.jpg';

class Education extends Component {
  state = {
    universities: [
      {
        name: "University of Engineering and Technology (UTEC)",
        degree: "Computer Science Bachelor",
        location: "Lima, Perú",
        year: "4th"
      },
    ],
  };

  capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <section id="Education">
        <h2 className="section__title">Education</h2>
        <div className="field field__group field__education">
          {this.state.universities.map((university, index) => {
            let tags = Object.keys(university).reduce((tags, key) => {
              tags.push(
                <div key={key} className="field">
                  <span className="field__name">{this.capitalize(key)}: </span>
                  <span className="field__text">{university[key]}</span>
                </div>
              );
              return tags;
            }, []);
            return (
              <div key={index} className="field field__group field__university">{tags}</div>
            );
          })}
        </div>
        <PolaroidFilm src={utecImg} height="120rem" width="160rem"/>
      </section>
    );
  }
}

export default Education;
