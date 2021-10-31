import axios from "axios";
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../../constants/productConstants";
const url = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`)
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: err.response
        })
    }
}