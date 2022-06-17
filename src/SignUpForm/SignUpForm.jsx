import { useState } from "react";
import { createAuthUserWithEmailAndPassword  , creatUserDocumentFromAuth,  signInWithGooglePopup , signInAuthUserWithEmailAndPassword} from "../Utils/FireBase";
import FormInput from "../formInput/formInput";

import Button from "../Button/Button"; 
import './SignUp.style.scss'

const defaultFormsField = {
    
    email:'',
    password:'',




}



const SignUpForm = () => {
    const [formFields, setformFields] = useState(defaultFormsField)
    const { email ,password } = formFields;
    const resetFormFields = () => {
        setformFields(defaultFormsField);

    }
    const signInWithGoogle = async () => {
        const {user} =  await signInWithGooglePopup();
        await creatUserDocumentFromAuth(user) 
    
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            resetFormFields();
    
        } catch (error) {    
            if(error.code = "auth/wrong-password")
            {
                alert('incorrect password for email')

            }
           console.log(error);
           switch (error.code)
           {
               case 'auth/wrong-password' :
                   alert("wrong password for email ")
                   break;
                case 'auth/user-not-found' :
                    alert("No user assoicated with this email")
                    break;
                default:
                    console.log(error);

           }  
    
        }
    }
    
    const handleChange = (event) => {
        const {name , value} = event.target;
        setformFields ({...formFields, [name]:  value })

    };

    return (  
        <div className='sign-up-container'>
        <h2>Already have an account</h2>
        <span> Sign in with your email and password </span>
        <form onSubmit= {handleSubmit}>
        
       
        
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
        
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
           
        <div className="buttons-container">
        
        <Button type="Submit">Sign in</Button>
        
        <Button type="button"  buttonType='google' onClick={signInWithGoogle} >Sign in with google</Button>
        
        
        
        
        </div>
        
        
        
        
        </form>
        
        </div>


    );
}
 
export default SignUpForm;