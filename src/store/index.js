import {createStore, combineReducers} from "redux"
import  ProductsReducer from "./reducer/ProductReducer"
import CartReducer from "./reducer/CartReducer"


const root=  combineReducers(
    {
        ProductsReducer,
        CartReducer
    }
);
const store = createStore(root);
export default store;