import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Clicked');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='pink' text='Add' onClick={onClick} />
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
