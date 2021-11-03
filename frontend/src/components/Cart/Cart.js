import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deleteIcon from '../../img/icons/delete.png'
import { removeFromCart } from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom'
import QuantityButton from '../QuantityButton/QuantityButton'
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    useEffect(() => {
        totalAmount()
    }, [cartItems])

    const totalAmount = () => {
        let tempPrice = 0;
        cartItems.map(item => {
            tempPrice += Number(item.price)
        })
        setPrice(tempPrice)
    }
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'hetparekh16@gmail.com' })
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information)
    }

    return (
        <>
            {
                cartItems.length ?
                    <div style={{ background: 'linear-gradient(to right, #eecda3, #ef629f)' }}>
                        <div className="px-4 px-lg-0">

                            <div className="pb-5" style={{ paddingTop: '4rem' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                            <h2 className="text-center">My Cart ({cartItems.length})</h2>
                                            <hr />
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="p-2 px-3 text-uppercase">Products</div>
                                                            </th>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="py-2 text-uppercase">Price</div>
                                                            </th>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="py-2 text-uppercase">Quantity</div>
                                                            </th>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="py-2 text-uppercase">Remove</div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cartItems.map(cartItem => (
                                                                <tr key={cartItem.image}>
                                                                    <th scope="row" className="border-0">
                                                                        <div className="p-2">
                                                                            <img src={cartItem.image} alt="" width="70" style={{ marginRight: '5px' }} className="img-fluid rounded shadow-sm" />
                                                                            <div className="ml-5 d-inline-block align-middle">
                                                                                <h5 className="mb-0"> <Link to="/" className="text-dark d-inline-block align-middle">{cartItem.title}</Link></h5><span className="text-muted font-weight-normal font-italic d-block">Valid until 02/12/2021</span>
                                                                            </div>
                                                                        </div>
                                                                    </th>
                                                                    <td className="border-0 align-middle"><strong>$ {cartItem.price} </strong></td>
                                                                    <td className="border-0 align-middle"><strong><QuantityButton /> </strong></td>
                                                                    <td className="border-0 align-middle"><button className="text-dark btn btn-light" onClick={() => removeItemFromCart(cartItem.id)}> <img src={deleteIcon} alt="" /> </button></td>
                                                                </tr>
                                                            ))

                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row py-5 p-4 bg-white rounded shadow-sm mt-0">
                                        <div className="col-lg-6">
                                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                            <div className="p-4">
                                                <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                                <div className="input-group mb-4 border rounded-pill p-2">
                                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" />
                                                    <div className="input-group-append border-0">
                                                        <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                            <div className="p-4">
                                                <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                                <Link to="/" name="" cols="30" rows="2" className="form-control"></Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                            <div className="p-4">
                                                <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                                <ul className="list-unstyled mb-4">
                                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$ {price.toFixed(2)} </strong></li>
                                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                        <h5 className="font-weight-bold">$ {(price + 10).toFixed(2)}</h5>
                                                    </li>
                                                </ul><button onClick={() => buyNow()} className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div className="empty-cart-image">
                        <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" style={{
                            width: '250px',
                            height: '250px'
                        }} />
                        <br></br>
                        <h2>Your Cart Is Empty</h2>
                        <h5>Add Items to it now</h5>
                        <Link to="/" className="btn btn-success">Shop Now</Link>
                    </div>
            }
        </>
    )
}

export default Cart
