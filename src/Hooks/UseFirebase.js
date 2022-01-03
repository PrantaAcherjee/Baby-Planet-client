import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,getIdToken, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from './../Pages/Login/Firebase/Firebase.init';
firebaseAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState('');
    const auth = getAuth();

  // Google  log in  
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = (location,history) => {
       setIsLoading(true);
       signInWithPopup(auth, googleProvider)
        .then(result => {
        const user = result.user  
        saveGoogleUser(user.email)
        const redirect_uri=location?.state?.from || "/home";
        history.push(redirect_uri) 
        })

        .catch(error => {
        setError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }
    
// register with email pasword
    const registerWithEmailPassword = (email, password,location, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        setError("");
                 
        saveUser(email)
        const destination=location?.state?.from || "/home";
        history.replace(destination)
    })
    .catch(error => {
    setError(error.message)
    })
    .finally(()=>setIsLoading(false)); 
         
    }
// login with email password
    const logInWithEmailPassword = (email,password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            setError("");
            console.log(user);
            const redirect_uri=location.state?.from || "/";
            history.push(redirect_uri) 
        })
        .catch(error => {
        setError(error.message)
        })
        .finally(()=>setIsLoading(false));
        
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
    }, [auth])

    // is admin check
    useEffect(()=>{
        if(user.email){
            setIsLoading(true)
            fetch(` https://quiet-hamlet-36498.herokuapp.com/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin)) 
            .finally(()=>setIsLoading(false)); 
        }

    },[user.email])

    // log out section
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setuser({})
            })
            .catch(error => {
            setError(error.message)
            })
            .finally(()=>setIsLoading(false));
    }

    // save user to database
    const saveUser = (email) =>{
        const user={email};
        fetch(' https://quiet-hamlet-36498.herokuapp.com/users',{
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
        fetch(' https://quiet-hamlet-36498.herokuapp.com/users',{
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
        registerWithEmailPassword,
        logInWithEmailPassword,
    }
}

export default useFirebase;