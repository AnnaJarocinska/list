import {combineReducers} from 'redux';
import productsReducer from './app/products/duck';
import othersReducer from './app/others/duck';

const rootReducer = combineReducers({
    products: productsReducer,
    others: othersReducer,
})

export default rootReducer;