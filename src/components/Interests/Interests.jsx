import React, { Component }  from 'react';

class Interests extends Component {
  state = {
    interests: [
      "Puzzles",
      "Travel",
      "Movies & Series",
      "Snowboard",
      "Music"
    ]
  }

  render() {
    return (
      <section id="Interests">
        <h2 className="section__title">Interests</h2>
        <p>{this.state.interests.join(" - ")}</p>
      </section>
    );
  }
}

export default Interests;