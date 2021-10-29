import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const x = [1, 2, 3, 4, 5, 6];
    const pack = {
        place: "Paris Hill Tour",
        duration: 5,
        price: 180,
        rating: 8000,
        imgURL: "https://i.ibb.co/SNzfwvb/p-1.png"
    }

    return (
        <div id="packages" className="text-center pt-5">
            <div className="text-center mt-5">
                <h4 className="color-p">Choose Your Package</h4>
                <h2 className="package-text">Select Your Best Package For Your Travel</h2>
            </div>

            <Container>
                <Row>
                    {
                        x.map(idx => <Package key={idx} package={pack}></Package>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Packages;