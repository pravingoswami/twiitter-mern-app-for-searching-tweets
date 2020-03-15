import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import io from 'socket.io-client'
import {setNotification} from './actions/notificationTweets'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

const jsx = (
    <Provider store = {store} >
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
