import React from 'react'
import { products } from '../../productData';
import './Slider.css'

const Slider = (props) => {
    return (
        <>
            <br />
            <h2 className="text-center mt-5">{props.title} </h2>
            <hr className="m-auto" style={{ maxWidth: "80%", marginBottom: '10px' }} />
            <main class="page-slider-content">
                {
                    products.map(product => {
                        return <div class="card-slider" style={{
                            background: `url(${product.url}) no-repeat center center/cover`
                        }}>
                            <div class="slider-content">
                                <h2 class="slider-title">{product.title.shortTitle} </h2>
                                <p class="copy">{product.title.longTitle} </p>
                                <button class="slider-btn">Add to Cart</button>
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
