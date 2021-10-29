import React from 'react'
const Profile = ({ account, setAccount }) => {

    const handleLogout = () => [
        setAccount('')
    ]
    return (
        <div className="dropdown d-inline mx-3">
            <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Hi ! {account}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/" onClick={handleLogout}>Logout</a></li>
            </ul>
        </div>
    )
}

export default Profile
