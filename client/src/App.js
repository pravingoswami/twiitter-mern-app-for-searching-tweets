import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap'
import {Link, BrowserRouter , Route, Switch} from 'react-router-dom'
import Notification from './components/Notification';
import TweetList from './components/TweetList.js';

function App(props){
  return(
    <BrowserRouter>
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand><strong>TWITTER APP</strong></NavbarBrand>
          <Nav className="mr-auto" navbar>
              <NavItem> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to = "/search" style = {{color : "white", textDecoration : "none"}} >SEARCH TWEETS</Link>
            </NavItem>
              <NavItem> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to = "/notifications" style = {{color : "white", textDecoration : "none"}} >NOTIFICATIONS </Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>

   <Switch>
   
   <Route path = "/search" component = {TweetList} exact = {true} />
   <Route path = "/notifications" component = {Notification} exact = {true} />
   </Switch>
    
    </BrowserRouter>
  )
}

export default App