import React, { Component } from "react";
import FieldBlock from "./FieldBlock";
import PolaroidFilm from "./PolaroidFilm";
import utecImg from "../assets/images/utec.jpg";

class Education extends Component {
  render() {
    const { content, constants } = this.props;
    return (
      <section id="Education">
        <h2 className="section__title">{constants.EDUCATION}</h2>
        <FieldBlock
          fields={content.universities}
          groupFieldClass="education"
          singleFieldClass="university"
        />
        <PolaroidFilm src={utecImg} height="120rem" width="160rem" />
      </section>
    );
  }
}

export default Education;
