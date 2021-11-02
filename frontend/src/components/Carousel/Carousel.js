import React from 'react'
import './Carousel.css'
import { Link } from 'react-router-dom'

const Carousel = () => {
    return (
        <div>
            <div className="row">
                <div className="example-1 car-carousel">
                    <div className="wrapper">
                        <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2021</span>
                        </div>
                        <div className="data">
                            <div className="content">
                                <span className="author">Het Parekh</span>
                                <h1 className="title"><Link to="/">This is a demo product</Link></h1>
                                <p className="text">After thinking a bit I will decide what to put in demo product description</p>
                                <label htmlFor="show-menu" className="menu-button"><span></span></label>
                            </div>
                            <input type="checkbox" id="show-menu" />
                            <ul className="menu-content">
                                <li>
                                </li>
                                <li><Link to="/" className="fa fa-heart-o"><span>47</span></Link></li>
                                <li><Link to="/" className="fa fa-comment-o"><span>8</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div >
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
                                </li>
                                <li><Link to="/" className="fa fa-heart-o"><span>18</span></Link></li>
                                <li><Link to="/" className="fa fa-comment-o"><span>3</span></Link></li>
                            </ul>
                        </div>
                        <div className="data">
                            <div className="content">
                                <span className="author">Het Parekh</span>
                                <h1 className="title"><Link to="/">Still I am not sure about this title</Link></h1>
                                <p className="text">Let's see what we can do about this descripion thing</p>
                                <Link to="/" className="button">Read more</Link>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Carousel
