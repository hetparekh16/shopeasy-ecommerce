import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { products } from '../../productData';
import './Slider.css'
// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

const Slider = () => {
    return (
        <div>
            {/* <Carousel responsive={responsive} infinite={true} draggable={false} swipeable={false} centerMode={true} autoPlay={true} autoPlaySpeed={1000}> */}
            {
                products.map(product => {
                    return <div class="example-2 card">
                        <div class="wrapper" style={{
                            backgroundImage: `url(${product.url})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}>
                            <div class="header">
                                <div class="date">
                                    <p>MRP : {product.price.mrp} Rs</p>
                                </div>
                                {/* <ul class="menu-content">
                                    <li>
                                        <a href="/" class="fa fa-bookmark-o"></a>
                                    </li>
                                    <li><a href="/" class="fa fa-heart-o"><span>18</span></a></li>
                                    <li><a href="/" class="fa fa-comment-o"><span>3</span></a></li>
                                </ul> */}
                            </div>
                            <div class="data">
                                <div class="content">
                                    <span class="author">{product.id} </span>
                                    <h1 class="title"><a href="/">{product.title.shortTitle} </a></h1>
                                    <p class="text">{product.title.longTitle} </p>

                                    <a href="/" class="button">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            {/* </Carousel>; */}
        </div >
    )
}

export default Slider
