import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import TweetDesign from './TweetDesign'
import { Input, Button, Row, Col, Container } from 'reactstrap'
import {connect} from 'react-redux'
import { startGetTweets } from '../actions/tweetsAction'
import {setNotification} from '../actions/notificationTweets'
import io from 'socket.io-client'


class TweetList extends React.Component{

    constructor(){
        super()
        this.state = {
            twitter : "",
            hasMore : false,
            length : 10,
            tweets : [],
            notificationTweets : []
        }
    }

    handleTwitterSearch = (e) => {
        this.setState({
          [e.target.name] : e.target.value  
        })
      }
    
      handleSearch = (e) => {
        e.preventDefault()
        this.setState({hasMore : true})
        if(this.state.twitter == ""){
          return alert("invalid Input")
        } else {
            return this.props.dispatch(startGetTweets(this.state.twitter))
        }
      
    
    
      }

    componentWillReceiveProps = (props) => {
        this.setState({
          tweets : props.tweets.slice(0, this.state.length)
        })
        const socket = io('http://localhost:3023')

        // calling action generator and updating the state value for the notification tweets
        socket.on('connect',  () => {
            console.log('connected')
            socket.on("tweets", data => {
                // console.log(data)
                console.log('length',props.notificationTweets.length)  
                props.dispatch(setNotification(data))
            })
        })
      }


    fetchMore = () => {
        console.log('length',this.props.tweets)
        setTimeout(() => {
          this.setState(prevState => ({
            tweets : [...prevState.tweets, ...this.props.tweets.slice(prevState.tweets.length, (prevState.tweets.length + prevState.length))]
          }))
        }, 1000)
      }
    

    render(){
        return(
            <Container>
            <br></br>
            <br></br>
            <div>
               <Row>
                   <Col md = "10" >
                   <Input type="twitter" name="twitter" id="twitter" placeholder="Search Twitter" onChange = {this.handleTwitterSearch} style = {{width : "100%"}} /> 
                   </Col>
                   <Col md = "2" >
                   <Button color = "primary" onClick = {this.handleSearch} > Search</Button>
                   </Col>
               </Row>
            </div>
            <br></br>
            <br></br>
    
            <InfiniteScroll
              dataLength = {this.state.tweets.length}
              next = {this.fetchMore}
              hasMore = {this.state.hasMore}
              loader={<h4>Loading...</h4>}
            >
            {this.state.tweets && this.state.tweets.map((tweet, i) => <TweetDesign key = {i} tweet = {tweet} />
            ) }
            </InfiniteScroll>
          </Container>
        )
    }
}

const mapStateToProps = (state) => {

    return {
      tweets : state.tweets,
      notificationTweets : state.notificationTweets
    }
}

export default connect(mapStateToProps)(TweetList)