//import { async } from '@firebase/util';
import {auth , signInWithGooglePopup , creatUserDocumentFromAuth , signInWithGoogleRedirect} from '../../Utils/FireBase';
import { useEffect } from 'react';
import SignUpForm from '../../SignUpForm/SignUpForm';



const SignIn = () => {
    // useEffect ( async () => {
    //     const response = getRedirectResult (auth);
    //     if(response){
    //         const userdocref = await creatUserDocumentFromAuth(response.user) 
    //         }
    // } ,[]);

    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup();
        const userdocref = await creatUserDocumentFromAuth(user) 
    
    };
    
    return (

        <div>
        <h1>
        
        sign in
        
        </h1>
        <button onClick={logGoogleUser}> Sign in with google method</button>
        
        <SignUpForm />
        
        </div>



      );
}
 
export default SignIn;



