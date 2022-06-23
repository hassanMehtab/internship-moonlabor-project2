import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import { useNavigate } from 'react-router-dom';

import './cartDropDown.style.scss'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem';


const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckOutHandler = () => {
    navigate('/checkout')



  }


  console.log({cartItems})
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
      {cartItems.map((item => <CartItem key={item.id} cartItem={item}/>)) }
        </div>
        <Button onClick={goToCheckOutHandler}>Go To CheckOut</Button>
        
        </div>


      );
}
 
export default CartDropDown;