//import { async } from '@firebase/util';
import {signInWithGooglePopup , creatUserDocumentFromAuth} from '../../Utils/FireBase';




const SignIn = () => {
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
        
        
        </div>



      );
}
 
export default SignIn;



