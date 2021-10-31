import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import './AddPackage.css';

const AddPackage = () => {

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
        console.log(data);
        data.price = parseInt(data.price);
        data.duration = parseInt(data.duration);
        if (data.rating === "") {
            data.rating = 0;
        }
        else {
            data.rating = parseInt(data.rating);
        }
        console.log(data);

        const url = "https://sheltered-ocean-54325.herokuapp.com/places";
        await postData(url, data)
            .then(response => response.json())
            .then(d => {
                window.alert("Your Package Added");
                history.push('/');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (

        <div className="position-relative pt-5 ">
            <DashboardNavbar></DashboardNavbar>
            <div className="pt-4">
                <h2 className="package-text mb-2">Add a Package</h2>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="add-form-div text-center p-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input" required  {...register("place")} placeholder="Place Name" />

                        <input className="form-input" required  {...register("duration")} placeholder="Duration : Ex-5" />

                        <input className="form-input" {...register("price")} placeholder="Per Person Price : Ex-250" />

                        <input className="form-input" {...register("rating")} placeholder="Rating Count (If Available): Ex-1200" />

                        <input className="form-input" required {...register("imgURL")} placeholder="Image URL" />

                        <input className="submit-btn" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddPackage;