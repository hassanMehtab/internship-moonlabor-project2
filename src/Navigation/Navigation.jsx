import { Outlet,Link } from "react-router-dom";
import { Fragment , useContext   } from "react";
import {ReactComponent as CrwnLogo} from '../Assets/crown.svg'
import './Navigation.style.scss'
import CartIcon from '../CartIcon/CartIcon'
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";

import { signOutUser } from "../Utils/FireBase";
import  CartDropDown from '../CartDropDown/CartDropDown'
const Navigation = () => {
 const {currentUser } =useContext(UserContext)
 const {isCartOpen } =useContext(CartContext)
  
  
    return (
        <Fragment>
        <div>
        <div className="navigation">
        <Link className="logo-container"  to='/' >
        <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>
        
        Shop
        
        
        </Link>
        {
          currentUser ? (
            <span className='nav-link' onClick={signOutUser}> {''} Sign Out {''}    </span>

          ) : (
            <Link className="nav-link" to='/auth'>
        
                  sign in
            </Link>
        


          )}
          <CartIcon />
        </div>
        
        </div>
        { isCartOpen && <CartDropDown />}
         
        </div>
        <Outlet /> 
        </Fragment>



      );
}
 
export default Navigation;