import React from 'react'
import HomeGrid from './HomeGrid'
import Carousel from '../Carousel/Carousel'
import './Home.css'
const Home = () => {
    return (
        <div className="mt-6 homeHeight">
            <HomeGrid />
            <Carousel />
        </div>
    )
}

export default Home
