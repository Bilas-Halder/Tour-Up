import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const { place, price, imgURL, duration, rating } = props.package;
    return (
        <Col xm={12} sm={6} lg={4} className='col-customize'>
            <Card>
                <div className="pack-img-parent">
                    <Card.Img className="pack-img" variant="top" src={imgURL} />
                </div>
                <Card.Body>
                    <Card.Text className="mt-2 text-start">
                        <div className="d-flex justify-content-between">
                            <p className="pack-price">${price}/<span>Per Person</span></p>
                            <p className="pack-duration">
                                <i class="far fa-calendar-alt color-p"></i> {duration} Days/{duration + 1} Night
                            </p>
                        </div>
                        <p className="color-p pack-place"><i class="fas fa-map-marker-alt"></i> {place}</p>

                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0 pack-rating"><i class="fas fa-star color-p"></i> {
                                rating >= 1000 ? (rating / 1000) + "K+" : rating
                            } Ratings</p>

                            <NavLink className="primary-btn-right" to="/">Book Now</NavLink>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;