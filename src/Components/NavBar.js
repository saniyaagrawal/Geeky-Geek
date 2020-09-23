import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './NavBar.css'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [{user}, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log(user);
  return (
    
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Geeky Geek</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto my_nav" navbar>
          <NavItem>
              <Link to="/" style={{textDecoration:'none'}}><h4 className='nav'>All Courses</h4></Link>
            </NavItem>
            <NavItem>
              <Link to="/mycourses" style={{textDecoration:'none'}}><h4 className='nav'>My Courses</h4></Link>
            </NavItem>
            <NavItem>
              <Link to="/add" style={{textDecoration:'none'}}><h4 className='nav'>Add New Course</h4></Link>
            </NavItem>
          </Nav>
          {!isOpen && <NavbarText style={{paddingRight:10}}>{user?.displayName}</NavbarText>}
          {!isOpen && <Avatar src={user?.photoURL} />}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;