import React from 'react';
import './BookNow.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { async } from '@firebase/util';

const BookNow = () => {
    const [pack, setPack] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit } = useForm();
    const history = useHistory();


    const postData = (url, data) => {
        return fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };



    const onSubmit = async (data) => {
        data.placeId = pack?._id;
        data.people = quantity;

        const url = "https://sheltered-ocean-54325.herokuapp.com/bookone";
        await postData(url, data)
            .then(response => response.json())
            .then(d => {
                window.alert("Booking Done with pleasure");
                history.push('/');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        fetch(`https://sheltered-ocean-54325.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => setPack(data));
    }, []);



    const plusClickHandler = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };
    const minusClickHandler = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <Card className="bg-dark text-white book-now-banner">
                <div className="book-now-banner-img-div">
                    <Card.Img className="book-now-banner-img" src="https://i.ibb.co/7tK6ZH8/booknow-bg.png" alt="Card image" />
                </div>
                <Card.ImgOverlay className="img-overlay">
                    <div>
                        <Card.Title className="book-now-banner-title">Tour Package Details</Card.Title>
                        <p className="book-now-banner-text">
                            Home <span className="color-p">{'>'} Package Details</span>
                        </p>
                    </div>
                </Card.ImgOverlay>
            </Card>

            <div className="mt-5 pt-5">

                <Container>
                    <Row>
                        <Col xm={12} sm={8} lg={8} className=''>
                            <div className="pe-0 pe-sm-3">
                                <img src={pack.imgURL} alt="package-img" className="package-img" />
                                <div className="mt-5 booking-pack-place-div justify-content-between align-items-center">
                                    <p className="color-p booking-pack-place"><i className="fas fa-map-marker-alt"></i> {pack.place}</p>

                                    <p className="mb-0 booking-pack-rating text-center"><span>Excellent</span> <br />
                                        <i className="fas fa-star color-p"></i> {
                                            pack.rating >= 1000 ? (pack.rating / 1000).toFixed(1) + "K+" : pack.rating
                                        } Ratings</p>
                                </div>

                                <div className="mt-4 booking-pack-price-div mb-5 mb-sm-0 justify-content-between align-items-center">
                                    <p className="booking-pack-price">${pack.price}/<span>Per Person</span></p>

                                    <p className="booking-pack-price">Total Price : ${(pack.price * quantity).toFixed(2)}</p>
                                </div>

                            </div>
                        </Col>


                        <Col xm={12} sm={4} lg={4} className=''>
                            <div className="booking-form-div text-center p-4">
                                <h4>Book This Package</h4>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-input" required  {...register("name")} placeholder="Full Name" />

                                    <input className="form-input" value={user.email} required  {...register("email")} placeholder="Email" />

                                    <input className="form-input" required {...register("phone")} placeholder="Phone Number" />

                                    <input className="form-input" required {...register("address")} placeholder="Address" />

                                    <div className="quantity">

                                        <span onClick={minusClickHandler} className="minus" ><i className="fas fa-user-minus"></i></span>
                                        <span>People Going : <span className="color-p">{quantity}</span></span>
                                        <span onClick={plusClickHandler} className="plus"><i className="fas fa-user-plus"></i></span>
                                    </div>

                                    <select className="form-input" required   {...register("travelBy")}>
                                        <option value="">Travel Ticket Type</option>
                                        <option value="Bus">Travel in Bus</option>
                                        <option value="Plane">Travel in Plane</option>
                                    </select>

                                    <textarea className="form-input msg-box" {...register("massage")} placeholder="Massage" />

                                    <input className="submit-btn" type="submit" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default BookNow;