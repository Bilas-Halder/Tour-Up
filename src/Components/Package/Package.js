import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Package.css';

const Package = (props) => {
    const orderData = props?.orderData;
    const { _id, place, price, imgURL, duration, rating } = props.package;
    const [myOrder] = useState(props.myOrders);
    const [allOrder] = useState(props.allOrders);
    const [status, setStatus] = useState(props.status);
    const { orders, setOrders } = useAuth();

    const cancelOrder = () => {
        if (window.confirm("Do you want to cancel this Booking")) {
            console.log(props.orderId);

            fetch(`https://sheltered-ocean-54325.herokuapp.com/myorders/${props.orderId}`, {
                method: 'DELETE'
            }).then(response => {
                return response.json()
            }).then((d) => {
                const tempOrders = orders.filter(od => od._id !== props.orderId);
                setOrders(tempOrders);

            });

        }
    };

    const makeActiveOrder = () => {
        orderData.status = "Active";
        console.log(orderData);

        fetch(`https://sheltered-ocean-54325.herokuapp.com/allOrders/${props.orderId}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(response => response.json())
            .then(result => {
                setStatus("Activated");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <Col xm={12} sm={6} lg={4} className='col-customize'>
            <Card>
                <div className="pack-img-parent position-relative">
                    <Card.Img className="pack-img" variant="top" src={imgURL} />
                    {
                        (myOrder || allOrder) && <p className="status">{status}</p>
                    }
                </div>
                <Card.Body>
                    <div className="mt-2 card-text text-start">
                        <div className="d-flex justify-content-between">
                            <p className="pack-price">${price}/<span>Per Person</span></p>
                            <p className="pack-duration">
                                <i className="far fa-calendar-alt color-p"></i> {duration} Days/{duration + 1} Night
                            </p>
                        </div>
                        <p className="color-p pack-place"><i className="fas fa-map-marker-alt"></i> {place}</p>

                        {
                            allOrder && <p className="pack-price mb-0"><span>Booked by :- </span> {orderData.name}</p>
                        }

                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0 pack-rating"><i className="fas fa-star color-p"></i> {
                                rating >= 1000 ? (rating / 1000).toFixed(1) + "K+" : rating
                            } Ratings</p>

                            {
                                myOrder ? <button onClick={cancelOrder} className="primary-btn-right" >Cancel</button>
                                    : allOrder ? status === "Pending" && <button onClick={makeActiveOrder} className="primary-btn-right" >Active</button>
                                        : <NavLink className="primary-btn-right" to={`/bookpackage/${_id}`}>Book Now</NavLink>
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;