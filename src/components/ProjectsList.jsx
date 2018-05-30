import React from 'react'
import { projectsProp } from '../props'

const ProjectsList = (props) => {
    const projects = props.projects.map((project, key) => (
        <div className="row project" key={key}>
            <div className="col-12">
                <h2>{project.title}</h2>
                {
                    project.images.map((image, imageKey) => (
                        <div key={imageKey}>
                            <a href={project.link} target="_blank">
                                <img src={image} alt={project.title} className="img-fluid" />
                            </a>
                            <br />
                        </div>
                    ))
                }
                <br />
                <p><strong>Role:</strong> {project.role}</p>
                <p>{project.description}</p>
                <p><strong>Key tech:</strong> {project.keyTech}</p>
            </div>
        </div>
    ))

    return (
        <div className="col-12 col-sm-8 work">
            <div className="row">
                <div className="col-12">
                    <h2>Past Work</h2><br/>
                    {projects}
                </div>
            </div>
        </div>
    )
}

ProjectsList.propTypes = {
    projects: projectsProp.isRequired,
}

export default ProjectsList
