import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomeBanner.css';

const HomeBanner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-ocean-54325.herokuapp.com/banner/places")
            .then(res => res.json())
            .then(data => {
                setBannerData(data);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <>
            <Carousel fade>
                <Carousel.Item className="carousel-items" >
                    <img
                        className="carousel-img d-block"
                        src={bannerData[0]?.imgURL}
                        alt="First slide"
                    />

                    <div className="carousel-texts text-start">
                        <h1 className="item-text">Amazing Tour</h1>
                        <h1 className="item-text">In {bannerData[0]?.place}</h1>
                        <h2>7 Days 8 Night Tour</h2>
                        <NavLink to="/to" className="primary-btn banner-btn">Book Now</NavLink>
                    </div>

                </Carousel.Item>
                <Carousel.Item className="carousel-items" >
                    <img
                        className="carousel-img d-block w-100"
                        src={bannerData[1]?.imgURL}
                        alt="Second slide"
                    />

                    <div className="carousel-texts text-start">
                        <h1 className="item-text">Amazing Tour</h1>
                        <h1 className="item-text">In {bannerData[1]?.place}</h1>
                        <h2>6 Days 7 Night Tour</h2>
                        <NavLink to="/to" className="primary-btn banner-btn">Book Now</NavLink>
                    </div>

                </Carousel.Item>
                <Carousel.Item className="carousel-items" >
                    <img
                        className="carousel-img d-block w-100"
                        src={bannerData[2]?.imgURL}
                        alt="Third slide"
                    />


                    <div className="carousel-texts text-start">
                        <h1 className="item-text">Amazing Tour</h1>
                        <h1 className="item-text">In {bannerData[2]?.place}</h1>
                        <h2>6 Days 7 Night Tour</h2>
                        <NavLink to="/to" className="primary-btn banner-btn">Book Now</NavLink>
                    </div>

                </Carousel.Item>
            </Carousel>

        </>

    );
};

export default HomeBanner;