import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../Assets/crown.svg'
import './Navigation.style.scss'
const Navigation = () => {
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
        <Link className="nav-link" to='/auth'>
        
        sign in
        
        
        </Link>
        </div>
        </div>
    
        <Outlet />  
        </div>
        </Fragment>



      );
}
 
export default Navigation;