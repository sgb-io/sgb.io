import React from 'react'
import PropTypes from 'prop-types'
import { socialProp } from '../props'

const Header = (props) => {
    const socialLinks = props.social.map((social, key) => (
        <li key={key} className="nav-item">
            <a
                href={social.url}
                target="_blank"
                className="nav-link"
            >
                {social.name}
            </a>
        </li>
    ))

    return (
        <div className="row header">
            <div className="col-12 col-sm-4 logo">
                <h1><img src={props.face} alt="My face" className="face" /></h1>
            </div>
            <div className="col-12 col-sm-8">
                <ul className="nav nav-pills nav-fill">
                    {socialLinks}
                </ul>
            </div>
        </div>
    )
}

Header.propTypes = {
    face: PropTypes.string.isRequired,
    social: socialProp.isRequired,
}

export default Header
