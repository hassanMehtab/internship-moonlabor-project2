//import SHOP_DATA from '../../../Shopdata.json'
import { useContext } from 'react';
import { ProductsContext } from '../../../Context/Product';
import ProductCard from '../../../ProductCard/ProductCard';
import './Shop.style.scss'
const Shop = () => {
    const {products} = useContext(ProductsContext)
    return (
        <div className='product-container'>
        {products.map ((product) => (
            <ProductCard key={product.id} product={product}  />



    ))}
    
        
        </div>


      );
}
 
export default Shop;