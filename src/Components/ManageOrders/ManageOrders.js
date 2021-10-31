import React from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Package from '../Package/Package';

const ManageOrders = () => {
    const { user, orders, setOrders, loading, setLoading } = useAuth();

    useEffect(() => {
        fetch(`https://sheltered-ocean-54325.herokuapp.com/getAllOrders`)
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
                <h2 className="package-text">Manage All Bookings</h2>
            </div>



            <Container>
                <Row>
                    {
                        orders.map(order => <Package allOrders status={order.status} people={order.people} key={order._id} package={order.package} orderData={order} orderId={order._id}></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageOrders;