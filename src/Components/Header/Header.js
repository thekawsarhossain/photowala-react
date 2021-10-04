import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* nav bar start here  */}
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container>
                    <NavLink to="/home" activeStyle={{ color: "#dd2c00" }} className="fw-bold logo">
                        <img
                            alt="logo"
                            src={logo}
                            className="d-inline-block align-bottom"
                        />{' '}
                        PhotoWala
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="nav-item" activeStyle={{ color: "#dd2c00", borderBottom: "1px solid #dd2c00" }} to="/home">Home</NavLink>
                            <NavLink className="nav-item" activeStyle={{ color: "#dd2c00", borderBottom: "1px solid #dd2c00" }} to="/gallery">Gallery</NavLink>
                            <NavLink className="nav-item" activeStyle={{ color: "#dd2c00", borderBottom: "1px solid #dd2c00" }} to="/courses">Courses</NavLink>
                            <NavLink className="nav-item" activeStyle={{ color: "#dd2c00", borderBottom: "1px solid #dd2c00" }} to="/about">About us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;