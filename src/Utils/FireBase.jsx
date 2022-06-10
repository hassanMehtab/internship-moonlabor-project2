import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {getAuth , signInWithPopup , signInWithRedirect , GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc, getDoc , setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBkjlAspZKBegg544-WtIsuDjVa41dmRg4",
    authDomain: "la-ropa-db.firebaseapp.com",
    projectId: "la-ropa-db",
    storageBucket: "la-ropa-db.appspot.com",
    messagingSenderId: "971702777416",
    appId: "1:971702777416:web:4de20edb205e681fe48a7d",
    measurementId: "G-TZRXB6SL4J"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({

        prompt: "select_account"
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth , provider);
  export const db = getFirestore () ;
  export const creatUserDocumentFromAuth = async (userAuth) => {
    const userdocref = doc(db , 'users', userAuth.uid);
    console.log(userdocref)
    const userSnapShot = await getDoc(userdocref);



    
    if(!userSnapShot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userdocref ,{
                displayName,
                email,
                createdAt

            } );

        }
        catch (error){

            console.log("error", error.message);
        }

    }
    return userdocref ; 
  }


  
  //const analytics = getAnalytics(app);