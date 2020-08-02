import React, { Component } from "react";
import FieldBlock from "../FieldBlock/FieldBlock";

class Experience extends Component {
  render() {
    const { content, constants } = this.props;
    return (
      <section id="Experience">
        <h2 className="section__title">{constants.WORK_EXPERIENCE_ACTIVITIES}</h2>
        <div>
          <FieldBlock
            fields={content.experiences}
            singleFieldClass="experience"
            groupFieldClass="experiences"
          />
        </div>
      </section>
    );
  }
}

export default Experience;
