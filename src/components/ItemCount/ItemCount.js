import React, {useState} from "react";
import Button from '@mui/material/Button';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";



function ItemCount () {

    const  [number, setNumber] = useState(0);
    
    const numberMas = () => {
        setNumber (number+1)
        console.log(number +'  Producto agregado')
    };
    const numberMenos = () => {
        if (number > 0){
        setNumber (number-1)
        console.log(number +'  Producto eliminado')
    }};
    return(
   
        <Box
        sx={{
            color:'white'
        }}>
        <h1> Cantidad </h1> 
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            color: 'white'
            
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