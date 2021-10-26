import React from 'react'
import './Navbar.css'

const handleClick = () => {
    document.body.classList.toggle('nav-active')
}
const Navbar = () => {
    return (
        <>
            <div className="menu-icon" onClick={handleClick}>
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className="nav">
                <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list-item">Home</li>
                        <li className="nav__list-item">About</li>
                        <li className="nav__list-item">Projects</li>
                        <li className="nav__list-item">Contact</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
