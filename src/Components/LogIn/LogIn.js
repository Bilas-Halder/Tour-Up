import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { user, logInUsingGoogle, loginUsingFacebook, setLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from?.pathname;


    useEffect(() => {
        // if someone is not came from other route he will goto home
        if (!path && user?.email) {
            history.push("/");
        }
    }, [user]);

    const googleLogin = () => {
        logInUsingGoogle()
            .then(() => {
                history.push(path);
                setLoading(false);
            })
    }

    const facebookLogin = () => {
        loginUsingFacebook()
            .then(() => {
                history.push(path);
                setLoading(false);
            })
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

                <button onClick={facebookLogin} className="facebook">
                    <div className="f-icon">
                        <i className="fab fa-facebook-f"></i>
                    </div> LogIn with Facebook
                </button>
            </div>
        </div>
    );
};

export default LogIn;