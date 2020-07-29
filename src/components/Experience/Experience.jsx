import React, { Component } from "react";
import FieldBlock from "../FieldBlock/FieldBlock";

class Experience extends Component {
  state = {
    experiences: [
      [
        {
          name: "Work",
          text: "UTEC Ventures",
          link: "http://utecventures.com/"
        },
        {
          name: "Job Title",
          text: "Frontend Web Developer"
        },
        {
          name: "Location",
          text: "Lima, Perú"
        },
        {
          name: "Period",
          text: "Jul 2019 - Sep 2019"
        },
      ],
      [
        {
          name: "Work",
          text: "AmigoCloud",
          link: "https://www.amigocloud.com/en/"
        },
        {
          name: "Job Title",
          text: "Full Stack Developer Intern"
        },
        {
          name: "Location",
          text: "Lima, Perú - San Francisco, US"
        },
        {
          name: "Period",
          text: "Jul 2018 - Nov 2018"
        },
      ],
      [
        {
          name: "Activity",
          text: "Creacode Coach",
          link: "https://www.creacode.com.pe/"
        },
        {
          name: "Description",
          text: "Teach computational thinking and code to children"
        },
        {
          name: "Location",
          text: "Lima, Perú"
        },
        {
          name: "Period",
          text: "2018 - present"
        },
      ],
    ],
  };

  render() {
    return (
      <section id="Experience">
        <h2 className="section__title">Work Experience & Activities</h2>
        <div>
          <FieldBlock
            fields={this.state.experiences}
            singleFieldClass="experience"
            groupFieldClass="experiences"
          />
        </div>
      </section>
    );
  }
}

export default Experience;
