import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    const [orders, setOrders] = useState([]);


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //google login system
    const logInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };


    //Facebook login system
    const loginUsingFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }


    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            }
            else if (auth.currentUser) {
                setUser(auth.currentUser);
            }
            setLoading(false);
        });
    }, [auth, logged]);


    const logout = (path, history) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                history.push(path || '/');
            })
            .finally(setLoading(false));
    }

    return {
        user,
        logged,
        loading,
        orders,
        setOrders,
        setUser,
        setLogged,
        setLoading,
        logInUsingGoogle,
        loginUsingFacebook,
        logout
    };
};

export default useFirebase;