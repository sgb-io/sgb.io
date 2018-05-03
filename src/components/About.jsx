import React from 'react'
import PropTypes from 'prop-types'

const About = (props) => {
    const intros = props.intros.map((intro, key) => (
        <p key={key}>{intro}</p>
    ))

    return (
        <div className="row about">
            <div className="col-xs-12">
                {intros}
            </div>
        </div>
    )
}

About.propTypes = {
    intros: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default About
