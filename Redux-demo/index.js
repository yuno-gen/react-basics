const redux = require('redux')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();

console.log('From index.js');

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";


//Action Creator
function buyCake() {
    //Action
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

const intialCakeState = {
    numOfCakes: 10,
    numOfIcecreamState: 20
}

const initialIcecreamState = {
    numOfIcecreamState: 20
}

const cakeReducer = (state = intialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreamState: state.numOfIcecreamState - 1
        }
        default: return state;
    }
}

const reducer = (state = intialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreamState: state.numOfIcecreamState - 1
        }
        default: return state;
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

// const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("intital state", store.getState());
store.subscribe(() => {
    console.log("updated State", store.getState());
});

//const unsubscribe = store.subscribe(()=> console.log("updated state", store.getState()))

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());


// unsubscribe()