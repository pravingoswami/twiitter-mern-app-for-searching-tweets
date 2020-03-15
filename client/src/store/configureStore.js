import {combineReducers, createStore , applyMiddleware} from 'redux'
import tweetsReducers from '../reducers/tweetsReducers'
import thunk from 'redux-thunk'
import notificationTweetsReducers from '../reducers/notificationTweetsReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        tweets : tweetsReducers,
        notificationTweets : notificationTweetsReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore