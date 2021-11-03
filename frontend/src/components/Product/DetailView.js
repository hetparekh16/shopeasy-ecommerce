import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../redux/actions/productActions';
import './DetailView.css'
import shopCart from '../../img/icons/shopping-cart.png'
import thunder from '../../img/icons/thunder.png'
import { addToCart } from '../../redux/actions/cartActions';
import { useHistory } from 'react-router-dom'
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
const DetailView = ({ match }) => {

    const { product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch])

    const handleAddToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart')
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
            <div style={{ overflowY: "hidden" }}>

                {
                    product && Object.keys(product).length &&
                    <div className="container-fluid hidden-pro">
                        <div className="cart">
                            <div className="row row1">
                                <div className="col-md-4">
                                    <img src={product.image} width="100%" id="ProductImg" />
                                </div>
                                <div className="col-md-6">
                                    <h1 className="product-title">{product.title}</h1>
                                    <div className="price">
                                        <span>$ {product.price}</span>
                                        <span>$ {product.price * 2}</span>
                                    </div>
                                    <p>{product.rating.count} Customers rated this 5 Star</p>
                                    <div id="product" className="product-inf">
                                        <h2>Product Details</h2>
                                        <hr />
                                        <br />
                                        <div id="Description">
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button onClick={() => handleAddToCart()} className="custom-btn"><img style={{ filter: 'invert(1)', marginBottom: '5px', marginRight: '3px' }} src={shopCart} alt="" /> Add To Cart</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button onClick={() => buyNow()} className="custom-btn"><img style={{ filter: 'invert(1)', marginBottom: '5px', marginRight: '3px' }} src={thunder} alt="" />Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default DetailView
