import React from 'react'
import { products } from '../../productData';
import './Slider.css'

const Slider = (props) => {
    return (
        <>
            <br />
            <h2 className="text-center mt-5">{props.title} </h2>
            <hr className="m-auto" style={{ maxWidth: "80%", marginBottom: '10px' }} />
            <main className="page-slider-content">
                {
                    products.map(product => {
                        return <div className="card-slider" key={product.id} style={{
                            background: `url(${product.url}) no-repeat center center/cover`
                        }}>
                            <div className="slider-content">
                                <h2 className="slider-title">{product.title.shortTitle} </h2>
                                <p className="copy">{product.title.longTitle} </p>
                                <button className="slider-btn">Add to Cart</button>
                            </div>
                        </div>
                    })

                }
            </main>
            <div>
                {

                }
            </div >
        </>
    )
}

export default Slider
