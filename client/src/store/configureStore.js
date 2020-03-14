import {combineReducers, createStore , applyMiddleware} from 'redux'
import tweetsReducers from '../reducers/tweetsReducers'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        tweets : tweetsReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore