import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../Assets/shopping-bag.svg'
import './CartIcon.style.scss'
import { CartContext } from '../Context/CartContext';
import CartDropDown from '../CartDropDown/CartDropDown';
import CartItem from '../CartItem/CartItem';
const CartIcon = () => {
    const {isCartOpen , setIsCartOpen , cartCount, cartItems} =useContext(CartContext);

    console.log({isCartOpen, setIsCartOpen})
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'  />
        <span className='item-count'> {cartItems?.length || 0} </span>
        </div>

        

     );
}
 
export default CartIcon;