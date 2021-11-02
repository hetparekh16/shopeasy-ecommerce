import React from 'react'
import { Link } from 'react-router-dom'
const Profile = ({ account, setAccount }) => {

    const handleLogout = () => [
        setAccount('')
    ]
    return (
        <div className="dropdown d-inline mx-3">
            <Link className="btn btn-secondary dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Hi ! {account}
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link className="dropdown-item" to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </div>
    )
}

export default Profile
