import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarBrand, NavItem, NavbarText, NavLink, Nav, Form, Input, Button} from 'reactstrap'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      twitter : ""
    }
  }

  render(){
    return(
      <div>
         <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>reactstrap</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem> 
                    <Input type="twitter" name="twitter" id="twitter" placeholder="Search Twitter"  style = {{width : "700px"}} />
              </NavItem>
              <NavItem>
              <Button color = "primary" > Search</Button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
      </div>
    )
  }

}

export default App