import { useState } from "react";
import { createAuthUserWithEmailAndPassword  , creatUserDocumentFromAuth} from "../Utils/FireBase";
import FormInput from "../formInput/formInput";
import './SignIn.style.scss'
import Button from "../Button/Button";
// import { UserContext } from "../Context/UserContext";


const defaultFormsField = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''



}



const SignInForm = () => {
    const [formFields, setformFields] = useState(defaultFormsField)
    const {displayName , email ,password , confirmPassword} = formFields;
   // const {setCurrentUser} = useContext(UserContext)
    const resetFormFields = () => {
        setformFields(defaultFormsField);

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
        alert("please renter password")
        return ; 
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email , password );
            //setCurrentUser(user)
            await creatUserDocumentFromAuth (user , {displayName});
            resetFormFields();
    
        } catch (error) {    
            if(error.code == "auth/email-already-in-use"){

                alert("cant create user with same email")
            } else 
            console.log("user creation encountered an error on creation" , error);
    
        }
    }
    
    const handleChange = (event) => {
        const {name , value} = event.target;
        setformFields ({...formFields, [name]:  value })

    };

    return (  
        <div className='sign-up-container'>
        <h2>Dont have an account</h2>
        <span> Sign up with your email and password </span>
        <form onSubmit= {handleSubmit}>
        
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
        
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
        
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
           
        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        
        <Button type="Submit" >Sign Up</Button>
        
        
        
        </form>
        
        </div>


    );
}
 
export default SignInForm;