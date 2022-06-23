import { createContext, useState , useEffect} from "react";

const addCartItem = (cartItems , productToAdd) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.product.id
    


    )
    if(existingCartItem) {
        return cartItems.map((cartItem ) => cartItem.id === productToAdd.product.id 
        ?
         {...cartItem, quantity : cartItem.quantity + 1}   
         : cartItem.product

        );

    }
    return [...cartItems, {...productToAdd.product , quantity: 1}]

}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen: () => {} ,
    cartItems : [] ,
    addItemToCart : () => {} ,
    cartCount: 0
});
export  const  CartProvider =  ({children}) => {
    const [isCartOpen , setIsCartOpen ] = useState(false);
    const [cartItems , setCartItem] = useState([])
    const [cartCount , setCartCount] = useState(0)
    useEffect (() => {
        const newCartCount = cartItems.reduce ((total , cartItem ) => total + cartItem.quantity , 0)
        setCartCount(newCartCount)

    } , [cartItems])
    const addItemToCart = (productToAdd) => {
        console.log({productToAdd})
        setCartItem(addCartItem(cartItems , productToAdd))
        
    }



    const value = {cartItems, isCartOpen , setIsCartOpen , addItemToCart , cartCount} 
return ( 
    <CartContext.Provider value={value}>{children}</CartContext.Provider>

)
}