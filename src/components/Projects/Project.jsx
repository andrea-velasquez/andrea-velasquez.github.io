import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import PolaroidFilm from "../PolaroidFilm/PolaroidFilm";

class Project extends Component {
  render() {
    const { project } = this.props;
    let imgWidthRem=200;

    return (
      <div className="project">
        <PolaroidFilm
          caption={`${project.name}\\n(${project.year})`}
          src={project.image}
          width={`${imgWidthRem}rem`}
          height={`${imgWidthRem*0.75}rem`}
          captionHref={project.link}
        />
        <div className="project__details">
          <div className="project__technologies">
            <span>Made with:</span>
            {Object.keys(project.technologies).map((key, index) => (
              <ReactSVG
                key={index}
                src={project.technologies[key]}
                className="logo"
                wrapper="span"
              />
            ))}
          </div>
          {project.collaboratorsGithub && (
            <div className="project__collaborators">
              In collaboration with:
              <ul>
                {project.collaboratorsGithub.map((username, index) => (
                  <li key={index}>@{username}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Project;
