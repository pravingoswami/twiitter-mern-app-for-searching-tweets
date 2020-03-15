import React from 'react'
import {connect} from 'react-redux'
import TweetDesign from './TweetDesign'

function Notification(props){
    return (
        <div>
            <br></br>
            <h1 style = {{textAlign : "center"}} ><strong>NOTIFICATIONS</strong> ({props.notificationTweets.length})</h1>
            <br></br>
           {props.notificationTweets && props.notificationTweets.map((tweet, i) => <TweetDesign key = {i} tweet = {tweet} />
            ) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notificationTweets : state.notificationTweets.reverse()
    }
}

export default connect(mapStateToProps)(Notification)