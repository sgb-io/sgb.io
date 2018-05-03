import React from 'react'
import SkillsList from './SkillsList'
import ProjectsList from './ProjectsList'
import { skillsProp, projectsProp } from '../props'

const Content = props => (
    <div className="row content">
        <SkillsList
            skills={props.skills}
        />
        <ProjectsList
            projects={props.projects}
        />
    </div>
)

Content.propTypes = {
    skills: skillsProp.isRequired,
    projects: projectsProp.isRequired,
}

export default Content
