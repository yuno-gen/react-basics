import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
const redux = require('redux')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
// import customerReducer from "./customer/customerReducer"

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer