import { useLocation, Link } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    return (
        <footer>
            {location.pathname === '/' && (
                <>
                    <p>Copyright &copy; moé</p>
                    <Link to="/about">About</Link>
                </>
            )}
        </footer>
    )
}

export default Footer
