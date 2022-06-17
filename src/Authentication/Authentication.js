//import { async } from '@firebase/util';
import {auth , signInWithGooglePopup , creatUserDocumentFromAuth , signInWithGoogleRedirect} from '../Utils/FireBase';
import { useEffect } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm'
import SignInForm from '../SignInForm/SignInForm'
import './Authentication.style.scss'




const SignIn = () => {
    // useEffect ( async () => {
    //     const response = getRedirectResult (auth);
    //     if(response){
    //         const userdocref = await creatUserDocumentFromAuth(response.user) 
    //         }
    // } ,[]);

    
    
    return (

        <div className='authentication-container'>
        
        <SignUpForm />
        
        <SignInForm />
        
        </div>



      );
}
 
export default SignIn;



