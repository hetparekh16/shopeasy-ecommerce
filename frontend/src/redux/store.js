import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductsReducer } from './reducers/productReducer'
const reducer = combineReducers({
    getProducts: getProductsReducer
})

const middlewear = [thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewear)))

export default store