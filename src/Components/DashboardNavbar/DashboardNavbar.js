import React from 'react';
import logo from '../../images/logo.png'
import '../Header/Header.css';
import './DashboardNavbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const DashboardNavbar = () => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from?.pathname;

    const handleLogOut = () => {
        logout(path, history);
    }

    return (
        <Navbar className="dash-nav" expand="lg">
            <div className="nav-container">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav.Link className="text-center dash-nav-btn" as={HashLink} to="/dashboard/myorders">My Bookings</Nav.Link>

                    <Nav.Link className="text-center dash-nav-btn" as={HashLink} to="/dashboard/manageorders">Manage All Bookings</Nav.Link>

                    <Nav.Link className="text-center dash-nav-btn" as={HashLink} to="/dashboard/addpackage">Add a Package</Nav.Link>

                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default DashboardNavbar;