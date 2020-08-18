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
  state = {
    projects: [
      {
        name: "Personal Website",
        year: "2020",
        link: "#",
        technologies: ["react", "sass"],
      },
      {
        name: "Yapay",
        year: "2019",
        link: "https://github.com/utec-yapay/yape-bcp-project-yapay",
        technologies: [
          "springboot",
          "postgresql",
          "vuejs",
          "nuxtjs",
          "flask",
          "nativescript",
        ],
        collaboratorsGithub: [
          "alessiayi",
          "arturocuya",
          "camilaferno",
          "lilvedaes",
          "Guillermo598",
        ],
      },
      {
        name: "Barranco Weather",
        year: "2018",
        link: "https://gitlab.com/barranco-weather",
        technologies: ["flask", "php", "raspberrypi"],
        collaboratorsGithub: ["arturocuya", "lilvedaes"],
      },
      {
        name: "The CUAC Path",
        year: "2017",
        link: "https://github.com/andrea-velasquez/TheCuacPath/",
        technologies: ["gamemaker"],
        collaboratorsGithub: ["arturocuya", "lilvedaes"],
      },
      {
        name: "Esnaque",
        year: "2017",
        link: "https://github.com/andrea-velasquez/esnaque/",
        technologies: ["python"],
        collaboratorsGithub: ["lilvedaes"],
      },
    ],
  };

  getLogos = (technologies) => {
    let logos = technologies.reduce((logos, technology) => {
      logos[technology] = svgLogos[technology];
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
