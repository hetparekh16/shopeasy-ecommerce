import React from 'react'
import { Link } from 'react-router-dom'

import './Slider.css'

const Slider = (props) => {
    return (
        <>
            <br />
            <h2 className="text-center mt-5">{props.title} </h2>
            <hr className="m-auto" style={{ maxWidth: "80%", marginBottom: '10px' }} />
            <main className="page-slider-content">
                {
                    props.products.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} >
                            {/* {console.log(product)} */}
                            <div className="card-slider" style={{ background: `url(${product.image}) no-repeat center center/contain` }}>
                                <div className="slider-content">
                                    <h2 className="slider-title">{product.title} </h2>
                                    <p className="copy">{product.category} </p>
                                    <button className="slider-btn">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    ))

                }
            </main>
        </>
    )
}

export default Slider
