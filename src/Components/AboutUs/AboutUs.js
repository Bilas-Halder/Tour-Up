import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="packages" className="text-center">
            <div className="text-center mt-5">
                <h4 className="color-p choose-text">Why Tour-Up</h4>
                <h2 className="package-text">Why Travel with Tour-Up</h2>
            </div>


            <Container>
                <Row>

                    <Col xm={12} sm={6} lg={3} className='col-customize'>
                        <div className="about-div">
                            <p className="about-text">
                                <i className="fas fa-hiking"></i>
                                2000+ Our worldwide guide
                            </p>
                        </div>
                    </Col>

                    <Col xm={12} sm={6} lg={3} className='col-customize'>
                        <div className="about-div">
                            <p className="about-text">
                                <i className="fas fa-hands-helping"></i>
                                100% trusted travel agency
                            </p>
                        </div>
                    </Col>

                    <Col xm={12} sm={6} lg={3} className='col-customize'>
                        <div className="about-div">
                            <p className="about-text">
                                <i className="fas fa-user-clock"></i>
                                10+ year of travel experience
                            </p>
                        </div>
                    </Col>

                    <Col xm={12} sm={6} lg={3} className='col-customize'>
                        <div className="about-div">

                            <p className="about-text">

                                <i className="fas fa-users"></i>
                                90% of our traveller happy
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AboutUs;