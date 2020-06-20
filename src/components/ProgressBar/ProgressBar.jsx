import React, { Component } from "react";
import './ProgressBar.scss';

class ProgressBar extends Component {
  state = {
    total: 12,
    character: "=",
    levels: {
      basic: 3,
      intermediate: 6,
      "intermediate-advance": 9,
      advance: 12,
    },
  };

  generateBar = (total, progress) => {
    const { character } = this.state.character;
    let remaining = total - progress;
    return (
      <React.fragment>
        <span class="progress-bar__filled">{character.repeat(progress)}</span>
        <span class="progress-bar__empty">{character.repeat(remaining)}</span>
      </React.fragment>
    );
  };

  render() {
    const progress = this.state.levels[this.props.level];
    const remaining = this.state.total - progress;
    return (
      <div class="progress-bar">
        <span class="progress-bar__filled">
          {this.state.character.repeat(progress)}
        </span>
        <span class="progress-bar__empty">
          {this.state.character.repeat(remaining)}
        </span>
      </div>
    );
  }
}

export default ProgressBar;
