import React from 'react'
import { skillsProp } from '../props'

const SkillsList = (props) => {
    const {
        technical,
        supplementary,
        commercial,
        academic,
    } = props.skills

    return (
        <div className="col-xs-12 col-sm-4 tech">
            <h1>Experience</h1>
            <h4>Technical</h4>
            <ul className="technical">
                {
                    technical.map(
                        (techSkill, key) => (<li key={key}>{techSkill}</li>),
                    )
                }
            </ul>
            <h4>Supplementary</h4>
            <ul className="technical">
                {
                    supplementary.map(
                        (supplementarySkill, key) => (<li key={key}>{supplementarySkill}</li>),
                    )
                }
            </ul>
            <h4>Commercial</h4>
            <ul className="experience">
                {
                    commercial.map((commercialSkill, key) => {
                        const {
                            dateRange,
                            description,
                            companyName,
                            companyLink,
                        } = commercialSkill
                        return (
                            <li key={key}>
                                <strong>{dateRange}</strong>
                                {' '}
                                {description}
                                {' '}
                                <a href={companyLink}>{companyName}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h4>Academic</h4>
            <ul className="academic">
                {
                    academic.map((academicItem, key) => (
                        <li key={key}>
                            <strong>{academicItem.date}</strong> {academicItem.description}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

SkillsList.propTypes = {
    skills: skillsProp.isRequired,
}

export default SkillsList
