const { default: axios } = require("axios")
const redux = require('redux')
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const thunkMiddleware = require('redux-thunk').default;


const intialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCESS = 'FETCH_USERS_SUCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = ()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSucess = (users)=>{
    return{
        type: FETCH_USERS_SUCESS,
        payload: users
    }
}

const fetchUsersFailure = (error)=>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = intialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            ...state,
            loading: true
        };
        case FETCH_USERS_SUCESS: return{
            loading: false,
            users: action.payload,
            error: ''
        };
        case FETCH_USERS_FAILURE: return{
            loading: false,
            users:[],
            error: action.payload
        };
        default:
            return state;
    }
}

const fetchUsers = ()=>{
    return(dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data.map(user => user.name)
            dispatch(fetchUsersSucess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message));
        })
    }
}

const store= createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());