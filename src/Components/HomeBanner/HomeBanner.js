import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomeBanner.css';

const HomeBanner = () => {

    const bannerData = [
        {
            title: "something"
        }
    ]

    return (
        <>
            <Carousel>
                <Carousel.Item className="carousel-items" >
                    <img
                        className="carousel-img d-block"
                        src="https://i.ibb.co/JyPWV7n/banner-1.png"
                        alt="First slide"
                    />

                    <div className="carousel-texts text-start">
                        <h1 className="item-text">Amazing Tour</h1>
                        <h1 className="item-text">In Hampshire</h1>
                        <h2>7 Days 8 Night Tour</h2>
                        <NavLink to="/to" className="primary-btn">Book Now</NavLink>
                    </div>

                </Carousel.Item>
                <Carousel.Item className="carousel-items" >
                    <img
                        className="carousel-img d-block w-100"
                        src="https://i.ibb.co/5Khph4y/banner-2.png"
                        alt="Second slide"
                    />

                    <div className="carousel-texts text-start">
                        <h1 className="item-text">Amazing Tour</h1>
                        <h1 className="item-text">In Madagascar</h1>
                        <h2>6 Days 7 Night Tour</h2>
                        <NavLink to="/to" className="primary-btn">Book Now</NavLink>
                    </div>

                </Carousel.Item>
                <Carousel.Item className="carousel-items" >
                    <img
                        className="carousel-img d-block w-100"
                        src="https://i.ibb.co/w6JfGDL/banner-3.png"
                        alt="Third slide"
                    />


                    <div className="carousel-texts text-start">
                        <h1 className="item-text">Amazing Tour</h1>
                        <h1 className="item-text">In Indonesia</h1>
                        <h2>7 Days 7 Night Tour</h2>
                        <NavLink to="/to" className="primary-btn">Book Now</NavLink>
                    </div>

                </Carousel.Item>
            </Carousel>

        </>

    );
};

export default HomeBanner;