import { useContext } from 'react';
// import CartItem from '../../../CartItem/CartItem';
import { CartContext } from '../../../Context/CartContext';
import './CheckOut.style.scss'
import CheckOutItem from '../../../CheckOutItem/CheckOutItem';


const CheckOut = () => {
    
    const { cartItems , addItemToCart , removeItemToCart , cartTotal} = useContext(CartContext)
    return (
            <div className='checkout-container' >
            <div className='checkout-header'>
            <div className='header-block'>
            <span>product</span>
            </div>
            <div className='header-block'>
            <span>description</span>
            </div>
            <div className='header-block'>
            <span>Quantiy</span>
            </div>
            <div className='header-block'>
            <span>price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
            </div>
            <div className='header-block'>
            </div>
            </div>

            {cartItems.map((cartItem) => (
        
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            
                
    ))} 
        
        
        

        
        <span className='total'>Total : ${cartTotal}</span>
        
        </div>


    ); 
}

 
export default CheckOut;