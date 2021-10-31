import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import NoDataFound from '../NoDataFound/NoDataFound';
import Package from '../Package/Package';
import BlueSpinner from '../Spinner/Spinner';

const ManageOrders = () => {
    const { orders, setOrders } = useAuth();
    const [load, setLoad] = useState(true);
    // load is for spinner

    useEffect(() => {
        fetch(`https://sheltered-ocean-54325.herokuapp.com/getAllOrders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoad(false);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="position-relative pt-5 ">
            <DashboardNavbar></DashboardNavbar>
            <div className="pt-4">
                <h2 className="package-text">Manage All Bookings</h2>
            </div>


            {

                load ? <BlueSpinner></BlueSpinner>
                    : orders.length === 0 ? <NoDataFound></NoDataFound>
                        : <Container>
                            <Row>
                                {
                                    orders.map(order => <Package allOrders status={order.status} people={order.people} key={order._id} package={order.package} orderData={order} orderId={order._id}></Package>)
                                }
                            </Row>
                        </Container>
            }
        </div>
    );
};

export default ManageOrders;