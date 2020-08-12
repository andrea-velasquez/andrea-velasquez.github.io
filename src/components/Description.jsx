import React, { Component } from "react";

class Description extends Component {
  render() {
    const { content, constants } = this.props;
    return (
      <section id="Description">
          <h2 className="field__name section__title">{ constants.DESCRIPTION }</h2>
          <p className="field field__text">
            { content }
          </p>
      </section>
    );
  }
}

export default Description;
