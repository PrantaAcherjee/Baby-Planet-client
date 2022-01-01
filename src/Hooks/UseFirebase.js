import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,getIdToken, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from './../Pages/Login/Firebase/Firebase.init';
firebaseAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState('');
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

    const registerWithEmailPassword = () => {
    return createUserWithEmailAndPassword(auth, email, password)
             
    }

    const logInWithEmailPassword = () => {
        return signInWithEmailAndPassword(auth, email, password);

    }

 // state observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {   
             setuser(user)
             getIdToken(user)
             .then(idToken=>{
             setToken(idToken)
             }) 
            }
            setIsLoading(false);
        })
    }, [])

    // is admin check
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])

    // log out section
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setuser({})
            })
            .finally(()=>setIsLoading(false));
    }

    // save user to database
    const saveUser = (email) =>{
        const user={email};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    const saveGoogleUser = (email) =>{
        const user={email};
        fetch('http://localhost:5000/users',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
        

    return {
         
        signInUsingGoogle,
        logOut,
        isLoading,
        user,
        error,
        admin,
        token,
        handleEmailChange,
        handlePasswordChange,
        registerWithEmailPassword,
        logInWithEmailPassword,
        saveUser,
        saveGoogleUser,
    }
}

export default useFirebase;