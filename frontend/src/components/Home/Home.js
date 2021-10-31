import React, { useEffect } from 'react'
import HomeGrid from './HomeGrid'
import Carousel from '../Carousel/Carousel'
import './Home.css'
import Slider from '../Slider/Slider'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productActions'
const Home = () => {
    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div className="mt-6 homeHeight">
            <HomeGrid />
            <Carousel />
            <Slider title="Trending Items" products={products} />
            <Slider title="On Sale" products={products} />
            <Slider title="Customers Choice" products={products} />
            <Slider title="Best Feedback" products={products} />
        </div>
    )
}

export default Home
