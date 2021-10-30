import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Header = () => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from?.pathname;

    const handleLogOut = () => {
        logout(path, history);
    }

    return (
        <Navbar fixed='top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo-div">
                            <img src={logo} alt="" />
                        </div>
                        <h4 className="brand-name"> Tour-Up</h4>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/">Home</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/#packages">Packages</Nav.Link>
                    {
                        user.email && <Nav.Link className="text-center nav-btn" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                    }

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/aboutus">About Us</Nav.Link>

                    {
                        user.email ? <Nav.Link className="text-center nav-btn" as={HashLink} to="/dashboard">{user.displayName}</Nav.Link>
                            : <Nav.Link className="text-center nav-btn" as={HashLink} to="/login">Log In</Nav.Link>
                    }
                    {
                        user.email && <button onClick={handleLogOut} className="text-center nav-btn">Log Out</button>
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;