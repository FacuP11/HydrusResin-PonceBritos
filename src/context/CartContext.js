import { createContext, useState } from "react";
 
export const CartContext = createContext();

export const CartProvider =({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (info) => {
      //Agregar item al carro
      console.log('Producto agregado'+cart)
    }
    const removeCart = (id) => {
        //Agregar item al carro
        setCart( cart.filter(prod => prod.id !== id ) )
      }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeCart,
            
        }}>
            {children}
        </CartContext.Provider>
    )
    }
