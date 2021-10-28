import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [hideDisplay, sethideDisplay] = useState(true)
    const handleClick = () => {
        document.body.classList.toggle('nav-active')
        hideDisplay ? sethideDisplay(false) : sethideDisplay(true)
    }
    return (
        <>
            <div className="menu-icon" onClick={handleClick}>
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className="nav nav-shopeasy">
                <div className="nav__content" style={{ display: hideDisplay ? 'none' : 'block' }}>
                    <ul className="nav__list">
                        <li className="nav__list-item">Home</li>
                        <li className="nav__list-item">About</li>
                        <li className="nav__list-item">Contact</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
