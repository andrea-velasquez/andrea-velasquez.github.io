import React, { Component } from "react";

class Description extends Component {
  render() {
    const { content, constants } = this.props;
    return (
      <section id="Description">
          <h2 className="field__name section__title">{ constants.DESCRIPTION }</h2>
          <div className="field">
          {content.split("\n").map((paragraph, idx) => 
            <p key={idx} className="field__text">
              { paragraph }
            </p>
          )}
          </div>
          
      </section>
    );
  }
}

export default Description;
