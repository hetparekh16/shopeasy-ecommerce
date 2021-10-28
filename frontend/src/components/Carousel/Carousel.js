import React from 'react'
import './Carousel.css'
const Carousel = () => {
    return (
        <div>
            <div className="row">
                <div className="example-1 car-carousel">
                    <div className="wrapper">
                        <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                        </div>
                        <div className="data">
                            <div className="content">
                                <span className="author">Jane Doe</span>
                                <h1 className="title"><a href="/">Boxing icon has the will for a couple more fights</a></h1>
                                <p className="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
                                <label htmlFor="show-menu" className="menu-button"><span></span></label>
                            </div>
                            <input type="checkbox" id="show-menu" />
                            <ul className="menu-content">
                                <li>
                                    {/* <a href="/" className="fa fa-bookmark-o"></a> */}
                                </li>
                                <li><a href="/" className="fa fa-heart-o"><span>47</span></a></li>
                                <li><a href="/" className="fa fa-comment-o"><span>8</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="example-2 car-carousel">
                    <div className="wrapper">
                        <div className="header">
                            <div className="date">
                                <span className="day">12</span>
                                <span className="month">Aug</span>
                                <span className="year">2016</span>
                            </div>
                            <ul className="menu-content">
                                <li>
                                    {/* <a href="/" className="fa fa-bookmark-o"></a> */}
                                </li>
                                <li><a href="/" className="fa fa-heart-o"><span>18</span></a></li>
                                <li><a href="/" className="fa fa-comment-o"><span>3</span></a></li>
                            </ul>
                        </div>
                        <div className="data">
                            <div className="content">
                                <span className="author">Jane Doe</span>
                                <h1 className="title"><a href="/">Stranger Things: The sound of the Upside Down</a></h1>
                                <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                <a href="/" className="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
