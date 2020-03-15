const initialnotificationTweets = []

const notificationTweetsReducers = (state = initialnotificationTweets, action) => {

    switch(action.type){

        case "SET_NOTIFICATION_TWEETS" : {
            console.log('reducer', state)
            return [...state,action.payload]
        }

        default : {
            return state
        }
    }
}

export default notificationTweetsReducers