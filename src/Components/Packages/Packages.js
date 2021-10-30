import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-ocean-54325.herokuapp.com/places")
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div id="packages" className="text-center">
            <div className="text-center mt-5">
                <h4 className="color-p choose-text">Choose Your Package</h4>
                <h2 className="package-text">Select Your Best Package For Your Travel</h2>
            </div>

            <Container>
                <Row>
                    {
                        packages.map(pack => <Package key={pack._id} package={pack}></Package>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Packages;