import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { user, logInUsingGoogle, loginUsingFacebook } = useAuth();


    const googleLogin = () => {
        console.log("clicking");
        logInUsingGoogle();
    }


    return (
        <div className="login-body">
            <div className="logIn-box">
                <button onClick={googleLogin} className="google">
                    <div className="g-icon">
                        <i className="fab fa-google"></i>
                    </div> LogIn with Google
                </button>

                <p className="or">Or</p>

                <button className="facebook">
                    <div className="f-icon">
                        <i className="fab fa-facebook-f"></i>
                    </div> LogIn with Facebook
                </button>
            </div>
        </div>
    );
};

export default LogIn;