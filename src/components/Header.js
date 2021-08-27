import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAddBtn, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{location.pathname === '/' ? title : "About"}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'blue'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAddBtn}
                />
            )}
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
