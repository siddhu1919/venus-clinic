import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about" style={{ marginLeft: '1rem' }}>About</Link>
            </nav>
        </header>
    )
}

export default Header