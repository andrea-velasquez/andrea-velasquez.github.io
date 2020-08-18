import React, { Component } from "react";

class Interests extends Component {
  render() {
    const { content, constants } = this.props;
    return (
      <section id="Interests">
        <h2 className="section__title">{constants.INTERESTS}</h2>
        <p>{content.join(" - ")}</p>
      </section>
    );
  }
}

export default Interests;
