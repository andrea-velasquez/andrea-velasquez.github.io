import React, { Component } from "react";
import FieldBlock from "../FieldBlock/FieldBlock";

class Work extends Component {
  state = {
    workPlaces: [
      [
        {
          name: "Work",
          text: "UTEC Ventures",
        },
        {
          name: "Job Title",
          text: "Frontend Web Developer",
        },
        {
          name: "Location",
          text: "Lima, Perú",
        },
        {
          name: "Period",
          text: "Jul 2019 - Sep 2019",
        },
      ],
      [
        {
          name: "Work",
          text: "AmigoCloud",
        },
        {
          name: "Job Title",
          text: "Full Stack Developer Intern",
        },
        {
          name: "Location",
          text: "Lima, Perú - San Francisco, US",
        },
        {
          name: "Period",
          text: "Jul 2018 - Nov 2018",
        },
      ],
      [
        {
          name: "Activity",
          text: "Creacode Coach",
        },
        {
          name: "Description",
          text: "Teach computational thinking and code to children",
        },
        {
          name: "Location",
          text: "Lima, Perú",
        },
        {
          name: "Period",
          text: "2018 - present",
        },
      ],
    ],
  };

  render() {
    return (
      <section id="Work">
        <h2 className="section__title">Work Experience & Activities</h2>
        <div>
          <FieldBlock
            fields={this.state.workPlaces}
            singleFieldClass="workPlace"
            groupFieldClass="workPlaces"
          />
        </div>
      </section>
    );
  }
}

export default Work;
