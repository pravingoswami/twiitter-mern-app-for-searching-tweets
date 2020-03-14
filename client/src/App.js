import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarBrand, NavItem, NavbarText, NavLink, Nav, Form, Input, Button} from 'reactstrap'
import {connect} from 'react-redux'
import { startGetTweets } from './actions/tweetsAction';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      twitter : ""
    }
  }

  handleTwitterSearch = (e) => {
    this.setState({
      [e.target.name] : e.target.value  
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    // (this.state.twitter == "") ? alert("Invalid Input") : this.props.dispatch(startGetTweets(this.state.twitter))
    if(this.state.twitter == ""){
      return alert("invalid Input")
    } else {
      return this.props.dispatch(startGetTweets(this.state.twitter))
    }


    console.log(this.state.twitter)
  }

  render(){
    return(
      <div>
         <div> {console.log(this.props.tweets)}
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>reactstrap</NavbarBrand>
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