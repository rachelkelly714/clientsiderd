import React, {useState} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

const Header = (props) => {
    return (
       <header>
            <Navbar className="header">
            <NavbarBrand href='/'> Coding Clerics </NavbarBrand>
          
         
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="https://github.com/rachelkelly714/codingclericsprojectfinal.git"> Wand of Git </NavLink>
                </NavItem>
            </Nav>
            <NavItem className="logoutbtn">
                <Button onClick={props.clickLogout}>Logout</Button>
            </NavItem>
          
            </Navbar>
       </header>
    );
};

export default Header;