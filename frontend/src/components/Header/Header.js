import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '../../img/logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
import Headerbuttons from './Headerbuttons'
const Header = () => {
    return (
        <div className="d-flex justify-content-between fixed-top bg-offWhite">
            <div className=""><Navbar /></div>
            <div className="my-2"> <Link to="/"> <img src={logo} alt="logo" className="logo-style handPointer" /></Link> </div>
            <div className="my-3 mx-4">
                <Headerbuttons />
            </div>
        </div>
    )
}

export default Header
