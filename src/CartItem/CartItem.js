import '../CartItem/CartItem.style.scss'

const CartItem = ({cartItem}) => {
    const {name ,imageUrl, price, quantity} = cartItem
    console.log({cartItem})
    return ( 
        <div className='cart-item-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'></div>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x {price}</span>
        
        </div>


     );
}
 
export default CartItem;

