export const  setNotification = (tweet) => {
    // set the new tweets into the store 
    return {
        type : "SET_NOTIFICATION_TWEETS",
        payload : tweet
    }
}