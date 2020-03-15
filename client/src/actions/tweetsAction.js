import axios from 'axios'
import io from 'socket.io-client'

export const setTweets = (tweets) => {
    return {
        type : "SET_TWEETS",
        payload : tweets
    }
}

export const startGetTweets = (search) => {
    return (dispatch) => {
        axios.post(`http://localhost:3023/tweets`, {search})
            .then(response => {
                // storing all the tweets into the store
                dispatch(setTweets(response.data.statuses))
            })
            .catch(err => alert(err))
    }


}