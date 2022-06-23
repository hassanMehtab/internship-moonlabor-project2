import { useContext } from 'react';
import CartItem from '../../../CartItem/CartItem';
import { CartContext } from '../../../Context/CartContext';
import './CheckOut.style.scss'

const CheckOut = () => {
    const {cartItems , addItemToCart} = useContext(CartContext)
    return ( 
        <div>
        <h1> welcome to checkout
        </h1>
        <div>
        
        {cartItems.map((cartItem) => {
            
            const {id , name , quantity} = cartItem;
            return (
            <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <br />
            <span >decrement</span>
            
            </div>

        );
        }
        
        
    )}
        </div>
        
        </div>


    )
}
 
export default CheckOut;