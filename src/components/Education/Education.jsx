import React, { Component } from "react";
import "./Education.scss";
import FieldBlock from "../FieldBlock/FieldBlock";
import PolaroidFilm from "../PolaroidFilm/PolaroidFilm";
import utecImg from "../../assets/images/utec.jpg";

class Education extends Component {
  state = {
    universities: [
      [
        {
          name: "Name",
          text: "University of Engineering and Technology (UTEC)",
        },
        {
          name: "Degree",
          text: "Computer Science Bachelor",
        },
        {
          name: "Location",
          text: "Lima, Perú",
        },
        {
          name: "Year",
          text: "4th",
        },
      ]
    ],
  };

  render() {
    return (
      <section id="Education">
        <h2 className="section__title">Education</h2>
        <FieldBlock
          fields={this.state.universities}
          groupFieldClass="education"
          singleFieldClass="university"
        />
        <PolaroidFilm src={utecImg} height="120rem" width="160rem" />
      </section>
    );
  }
}

export default Education;
