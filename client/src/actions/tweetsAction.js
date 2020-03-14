import axios from 'axios'

export const setTweets = (tweets) => {
    return {
        type : "SET_TWEETS",
        payload : tweets
    }
}

export const startGetTweets = (search) => {
    return (dispatch) => {
        axios.get(`http://localhost:3023/tweets?search=${search}`)
            .then(response => {
                console.log(response.data.statuses)
                dispatch(setTweets(response.data.statuses))
            })
            .catch(err => alert(err))
    }
}