import { GoogleAuthProvider, signOut} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user,setUser] = useState(null);

    const provider = new  GoogleAuthProvider();

    const  handleGoogleSignIn = () => {

        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user);
         })

         .catch ((error) => {
            console.log("Error",error);
            setUser(null);
         })

}
    
         // for signout

     const handleSignOut = () =>{
        signOut(auth)
        .then(()=> {
            console.log('Log out done');
            setUser(null);
        })
        .catch(error => {
            console.log('Error', error);
        })

     }


    return (
        <div>
            
            {/* <button onClick={ handleGoogleSignIn } > Continue with Google</button>
            <button onClick={ handleSignOut }>Log Out</button> */}


            {
                user ? 
                <button onClick={ handleSignOut }>Log Out</button> :  
                <button onClick={ handleGoogleSignIn } > Continue with Google</button>

            }

            { user && 
                     <div>
                        <h4>{user.displayName}</h4>
                        <p>Email: {user.email}</p>
                        <img src={user.photoURL} alt="" />
                     </div>

            }
        </div>
    );
};

export default Login;