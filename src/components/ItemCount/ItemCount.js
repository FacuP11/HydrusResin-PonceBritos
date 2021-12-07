import React, {useState} from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import { Box } from "@mui/system";




function ItemCount ({info}) {
    
    const  [number, setNumber] = useState(0);
    
    const numberMas = () => {
        if (info.stock > number){
        setNumber (number+1)
        console.log( ` Producto agregado, tienes en total ${number+1}` )}
    };
    const numberMenos = () => {
        if (number > 0){
        setNumber (number-1)
        console.log( ` Producto restado, tienes en total ${number-1}` )
    }};
    
    
    const [cart, setCart] = useState ({});
    const handleCLick = () => {
        console.log(info.name , info.precio + 'unidad ', ` Cantidad : ${number}`, ` Precio total${number * info.precio}`);
        
        console.log(cart);
        
    }
    return(
   
        <Box
        sx={{
            color:'black',
            display:'flex',

        }}>
        <h6> Cantidad: </h6> 
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            color: 'black'
            
        }}>
        <Button onClick={numberMenos}> - </Button>
        <p  >{number}</p>
        <Button onClick={numberMas}> + </Button>
        <br />
        <Link to={'/cart'}>
                    <Button color="secondary" onClick={handleCLick} > Agregar al carrito </Button>
        </Link>
        </Box>
    </Box>
    )
};


export default ItemCount;