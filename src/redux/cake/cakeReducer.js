import { BUY_CAKE, BAKE_CAKE } from "./cakeTypes";

const intialState = {
    numOfCakes: 10
}

const cakeReducer = (state = intialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        case BAKE_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes + parseInt(action.payload)
        }
        default: return state
    }
}

export default cakeReducer