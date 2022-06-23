import { useContext } from 'react';
import './ProductCard.style.scss'
import Button from '../Button/Button';
import { CartContext } from '../Context/CartContext';

const ProductCard = (product) => {
    const {name , imageUrl , price} = product.product;
    const {addItemToCart} = useContext(CartContext) 
    const addProductToCart = () => addItemToCart(product)
    return ( 

        <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'> 
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>

     );
}
 
export default ProductCard;