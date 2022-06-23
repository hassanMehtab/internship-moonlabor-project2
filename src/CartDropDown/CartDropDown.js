import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import './cartDropDown.style.scss'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem';


const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)

  console.log({cartItems})
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
      {cartItems.map((item => <CartItem key={item.id} cartItem={item}/>)) }
        </div>
        <Button>Go To CheckOut</Button>
        
        </div>


      );
}
 
export default CartDropDown;