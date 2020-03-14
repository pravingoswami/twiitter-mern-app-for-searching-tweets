import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarBrand, NavItem, NavbarText, NavLink, Nav, Form, Input, Button} from 'reactstrap'
import {connect} from 'react-redux'
import { startGetTweets } from './actions/tweetsAction';
import TweetDesign from './components/TweetDesign';
import InfiniteScroll from 'react-infinite-scroll-component'




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      twitter : "",
      hasMore : false,
      length : 10,
      tweets : []
    }
  }


  // socket = io('http://localhost:3023');

 
  
  

  handleTwitterSearch = (e) => {

    this.setState({
      [e.target.name] : e.target.value  
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.setState({hasMore : true})
    // (this.state.twitter == "") ? alert("Invalid Input") : this.props.dispatch(startGetTweets(this.state.twitter))
    if(this.state.twitter == ""){
      return alert("invalid Input")
    } else {
      return this.props.dispatch(startGetTweets(this.state.twitter))
    }
   
  //   this.socket.on('tweets', function(data){
  //     console.log(data)
  // })


    console.log(this.state.twitter)
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      tweets : props.tweets.slice(0, this.state.length)
      // tweets : props.tweetBatch
    })
  }




  fetchMore = () => {
    console.log('length',this.props.tweets)
    setTimeout(() => {
      this.setState(prevState => ({
        // tweets : [...prevState.tweets, this.props.tweets.slice(prevState.tweets.length, (prevState.tweets.length + this.state.length))]
        tweets : [...prevState.tweets, ...this.props.tweets.slice(prevState.tweets.length, (prevState.tweets.length + prevState.length))]
      }))
    }, 500)
  }

  render(){
    return(
      <div>
         <div> {console.log(this.state.tweets)}
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>TWITTER APP</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem> 
                    <Input type="twitter" name="twitter" id="twitter" placeholder="Search Twitter" onChange = {this.handleTwitterSearch} style = {{width : "700px"}} />
              </NavItem>
              <NavItem>
              <Button color = "primary" onClick = {this.handleSearch} > Search</Button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
      <div>
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
      </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {

    return {
      tweets : state.tweets
    }
}

export default connect(mapStateToProps)(App)