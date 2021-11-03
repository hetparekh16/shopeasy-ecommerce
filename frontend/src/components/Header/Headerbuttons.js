import React, { useState, useContext } from 'react'
import shopCart from '../../img/icons/shopping-cart.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import { LoginContext } from '../../context/contextProvider'
import Profile from './Profile'
const Headerbuttons = () => {
    const [openModal, setOpenModal] = useState(false)
    const { account, setAccount } = useContext(LoginContext)
    const handleModal = () => {
        setOpenModal(prev => !prev)
        // console.log(openModal)
    }

    const { cartItems } = useSelector(state => state.cart)
    return (
        <>
            <div>

                {
                    account ? <Profile account={account} setAccount={setAccount} /> : <button className="btn btn-primary mx-2" onClick={handleModal} type="submit">Login</button>
                }
                <Link to="cart"><button type="button" className="btn btn-warning position-relative">
                    <img src={shopCart} className="icon" alt="shopCart" /> Cart

                    {(cartItems.length) ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                    </span> : <div></div>}
                </button>
                </Link>
            </div>
            <div>
                <Login showModal={openModal} setShowModal={setOpenModal} setAccount={setAccount} />

            </div>
        </>
    )
}

export default Headerbuttons
