import PropTypes from 'prop-types'

export const skillsProp = PropTypes.shape({
    technical: PropTypes.arrayOf(PropTypes.string).isRequired,
    supplementary: PropTypes.arrayOf(PropTypes.string).isRequired,
    commercial: PropTypes.arrayOf(PropTypes.shape({
        dateRange: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        companyName: PropTypes.string.isRequired,
        companyLink: PropTypes.string.isRequired,
    })).isRequired,
    academic: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
})

export const projectsProp = PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keyTech: PropTypes.string.isRequired,
}))

export const socialProp = PropTypes.arrayOf(
    PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
)
