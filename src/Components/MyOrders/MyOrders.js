import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Package from '../Package/Package';
import './MyOrders.css';

const MyOrders = () => {
    const { user, orders, setOrders } = useAuth();

    useEffect(() => {
        fetch(`https://sheltered-ocean-54325.herokuapp.com/getOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="position-relative pt-5 ">
            <DashboardNavbar></DashboardNavbar>
            <div className="pt-4">
                <h2 className="package-text">My Booking</h2>
            </div>



            <Container>
                <Row>
                    {
                        orders.map(order => <Package myOrders status={order.status} people={order.people} key={order._id} package={order.package} orderId={order._id}></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;