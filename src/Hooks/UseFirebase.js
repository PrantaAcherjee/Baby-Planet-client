import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from './../Pages/Login/Firebase/Firebase.init';
firebaseAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading]=useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        //console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        //console.log(e.target.value)

    }

    const registerWithEmailPassword = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        e.preventDefault();
    }

    const logInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state changed', user)
                setuser(user)
            }
            setIsLoading(false);
        })
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setuser({})
            })
            .finally(()=>setIsLoading(false));
    }

    return {
        signInUsingGoogle,
        logOut,
        isLoading,
        user,
        error,
        handleEmailChange,
        handlePasswordChange,
        registerWithEmailPassword,
        logInWithEmailPassword,
    }
}

export default useFirebase;