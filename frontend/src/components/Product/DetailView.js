import { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { getProductDetails } from '../../redux/actions/productActions';
import './DetailView.css'
const DetailView = ({ match }) => {

    const { product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch])

    return (
        <div style={{ overflowY: "hidden" }}>
            <div className="container-fluid hidden-pro">
                <div className="cart">
                    <div className="row row1">
                        <div className="col-md-4">
                            <img src="https://g.top4top.io/p_18005g0a61.jpg" width="100%" id="ProductImg" />
                            {/* <div className="small-imgs">
                                <img src="https://g.top4top.io/p_18005g0a61.jpg" width="100%" className="small-img" />
                                <img src="https://h.top4top.io/p_1800o53842.jpg" width="100%" className="small-img" />
                                <img src="https://i.top4top.io/p_1800anjtp3.jpg" width="100%" className="small-img" />
                                <img src="https://j.top4top.io/p_1800a1b5d4.jpg" width="100%" className="small-img" />
                            </div> */}
                        </div>
                        <div className="col-md-6">
                            <h1 className="product-title">APRILSPRING Mens Running Sports Non-Slip Sneakers</h1>
                            <div className="reviews">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                                <p>240 reviews</p>
                            </div>
                            <div className="price">
                                <span>$38.00</span>
                                <span>$49.99</span>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-4">
                                    <h4>Color</h4>
                                    <div className="colors">
                                        <div className="black"></div>
                                        <div className="red"></div>
                                        <div className="white"></div>
                                        <div className="yellow"></div>
                                    </div>
                                </div>
                                <div className="col-md-4 sze">
                                    <h5>Size</h5>
                                    <select className="size custom-select">
                                        <option>Select Size</option>
                                        <option>39</option>
                                        <option>40</option>
                                        <option>41</option>
                                        <option>42</option>
                                    </select>
                                </div>
                                <div className="col-md-4 qty">
                                    <h5>Quantity</h5>
                                    <select className="quantity custom-select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div> */}
                            <div id="product" className="product-inf">
                                <ul>
                                    <li className="active"><a href="#Description">Product Description</a></li>
                                    <li><a href="#Details">Product Details</a></li>
                                </ul>
                                <div className="tabs-content">
                                    <div id="Description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero, inventore magnam!Natus, quibusdam ea?Modi nemo corrupti alias quae quis.</p>
                                    </div>
                                    <div id="Details" >
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Atque sequi eaque quisquam corrupti reprehenderit exercitationem iusto asperiores quae commodi quo?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <div className="row">
                                    <div className="col-md-6">
                                        <a href="#" className="custom-btn">Add To Cart <i className="fas fa-angle-right"></i></a>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#" className="custom-btn">Buy Now <i className="fas fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailView
