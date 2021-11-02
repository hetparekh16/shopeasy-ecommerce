import axios from "axios";
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_DETAIL_FAIL, GET_PRODUCT_DETAIL_SUCCESS } from "../../constants/productConstants";
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

export const getProductDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        // console.log(data);
        dispatch({
            type: GET_PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_PRODUCT_DETAIL_FAIL,
            payload: err.response
        })
    }
}

