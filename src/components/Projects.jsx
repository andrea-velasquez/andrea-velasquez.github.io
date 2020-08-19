import React, { Component } from "react";
import Project from "./Project";

const reqLogosSvgs = require.context(
  "../assets/images/brand-logos",
  false,
  /\.svg$/
);
const reqProjectsImgs = require.context("../assets/images/projects", false);

let reqToObject = (req) => {
  return req.keys().reduce((obj, path) => {
    let name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    obj[name] = req(path);
    return obj;
  }, {});
};

const svgLogos = reqToObject(reqLogosSvgs);
const projectsImgs = reqToObject(reqProjectsImgs);

class Projects extends Component {
  toFilename = (name) => {
    return name
          .toLowerCase()
          .replace(".", "")
          .replace(" ", "-");
  }

  getLogos = (technologies) => {
    let logos = technologies.reduce((logos, technology) => {
      let filename = this.toFilename(technology);
      logos[technology] = svgLogos[filename];
      return logos;
    }, {});
    return logos;
  };

  render() {
    let { content: projects, constants } = this.props;
    return (
      <section id="Projects">
        <h2 className="section__title">{constants.PROJECTS}</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              project={project}
              techLogos={this.getLogos(project.technologies)}
              image={projectsImgs[project.imageFilename]}
              constants={constants}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
