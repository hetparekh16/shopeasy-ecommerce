import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constants/cartConstants";
const url = 'http://localhost:8000';

export const addToCart = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({
            type: ADD_TO_CART,
            payload: data
        })

    } catch (err) {
        console.log("error while calling add to cart", err);
    }
}

export const removeFromCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })

    } catch (err) {
        console.log("error while calling add to cart", err);
    }
}