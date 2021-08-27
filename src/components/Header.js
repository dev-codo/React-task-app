import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// If no attribute title is passed on the component
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

// // CSS in JS: mostly for dynamic styling
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

export default Header
