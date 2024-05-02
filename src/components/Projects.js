import React from "react";
import project_data from "../data/project_data.js"
import RoundedCard from "./RoundedCard.js";
import './Projects.css';

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="max-width">
                <div className="title">Projects</div>
                <div className="projects-content">
                    <RoundedCard title={project_data[3].title} description={project_data[3].description} image={project_data[3].image} link={project_data[3].link} icon={project_data[3].icon} />
                    <RoundedCard title={project_data[2].title} description={project_data[2].description} image={project_data[2].image} link={project_data[2].link} icon={project_data[2].icon} />
                    <RoundedCard title={project_data[0].title} description={project_data[0].description} image={project_data[0].image} link={project_data[0].link} icon={project_data[0].icon} />
                    <RoundedCard title={project_data[1].title} description={project_data[1].description} image={project_data[1].image} link={project_data[1].link} icon={project_data[1].icon} />
                </div>
            </div>
        </div>

    );
}

export default Projects;