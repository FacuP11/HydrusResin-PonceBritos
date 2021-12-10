import React, {useState} from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Box } from "@mui/system";
import { useContext } from "react";


function ItemCount ({info}) {
    const agregarAlCarrito = useContext(CartContext);
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
        
               
       
        </Box>
    </Box>
    )
};


export default ItemCount;