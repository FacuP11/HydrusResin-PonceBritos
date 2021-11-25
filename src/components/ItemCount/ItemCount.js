import React, {useState} from "react";
import Button from '@mui/material/Button';


import { Box } from "@mui/system";



function ItemCount ({info}) {
    console.log(info.stock)
    const  [number, setNumber] = useState(0);
    
    const numberMas = () => {
        if (info.stock > number){
        setNumber (number+1)
        console.log(number +'  Producto agregado')}
    };
    const numberMenos = () => {
        if (number > 0){
        setNumber (number-1)
        console.log(number +'  Producto eliminado')
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
        <p>{number}</p>
        <Button onClick={numberMas}> + </Button>
        <br />
        <Button color="secondary">Agregar al carrito</Button>
        </Box>
    </Box>
    )
};


export default ItemCount;