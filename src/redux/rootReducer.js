import cakeReducer from "./cake/cakeReducer"
const redux = require('redux')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
// import iceCreamReducer from "./iceCream/iceCreamReducer"
// import customerReducer from "./customer/customerReducer"

const rootReducer = combineReducer({
    cake: cakeReducer
})

export default rootReducer
