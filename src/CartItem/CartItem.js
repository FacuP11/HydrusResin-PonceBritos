
import React from "react";
import {CartContext} from "../context/CartContext";
import { useContext } from "react";


function CartItem ({name, precio, stock, id}){


    const removeCart = useContext(CartContext);

    return (
        <div>
            <h3>{name}</h3>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {stock}</p>
            <button onClick= {  removeCart } >   
            Eliminar producto
            </button>
        </div>
    )
}

export default CartItem;