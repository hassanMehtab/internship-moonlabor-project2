import {createContext, useState , useEffect} from "react"
import { creatUserDocumentFromAuth, onAuthStateChangedListner } from "../Utils/FireBase";


export const  UserContext = createContext ({
currentUser : null ,
setCurrentUser: () => null ,


});

export const UserProvider =  ({children}) => {
 const [currentUser , setCurrentUser] = useState(null);
 const value = {currentUser , setCurrentUser}   
 useEffect (() => {
 const unSubscribe = onAuthStateChangedListner((user) => {
    if (user) {
        creatUserDocumentFromAuth(user)
    }
    setCurrentUser(user)
 })
 return unSubscribe
} ,[]);
return  <UserContext.Provider value={value}>
{children}
</UserContext.Provider>



}