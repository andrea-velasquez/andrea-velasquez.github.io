import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import PolaroidFilm from "../PolaroidFilm/PolaroidFilm";

class Project extends Component {
  render() {
    const { constants, project, image, techLogos } = this.props;
    let imgWidthRem=200;

    return (
      <div className="project">
        <PolaroidFilm
          withTape={true}
          caption={`${project.name}\\n(${project.year})`}
          src={image}
          width={`${imgWidthRem}rem`}
          height={`${imgWidthRem*0.75}rem`}
          captionHref={project.link}
        />
        <div className="project__details">
          <div className="project__technologies">
            <span>{constants.MADE_WITH}:</span>
            {project.technologies.map((tech, idx) => (
              <ReactSVG
                key={idx}
                src={techLogos[tech]}
                className="logo"
                wrapper="span"
              />
            ))}
          </div>
          {project.collaboratorsGithub && (
            <div className="project__collaborators">
              {constants.IN_COLLABORATION}:
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
