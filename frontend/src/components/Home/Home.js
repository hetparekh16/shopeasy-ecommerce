import React from 'react'
import HomeGrid from './HomeGrid'
// import Carousel from '../Carousel/Carousel'
import './Home.css'
import Slider from '../Slider/Slider'
const Home = () => {
    return (
        <div className="mt-6 homeHeight">
            <HomeGrid />
            {/* <Carousel /> */}
            <Slider />
        </div>
    )
}

export default Home
