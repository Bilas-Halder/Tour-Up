import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //google login system
    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };


    //Facebook login system
    const loginUsingFacebook = () => {
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
        })
    }, [auth, logged]);


    const logout = (path, history) => {
        signOut(auth)
            .then(() => {
                setUser({});
                history.push(path || '/');
            });
    }

    return {
        user,
        logged,
        setUser,
        setLogged,
        logInUsingGoogle,
        loginUsingFacebook,
        logout
    };
};

export default useFirebase;