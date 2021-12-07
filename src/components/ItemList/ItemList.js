import React from "react";
import { Box } from "@mui/system";
import Item from "../Item/Item";
import  items  from '../productos';


function ItemList() {
  

  return (
    <Box sh={{
      display:'flex'
    }}>
      {items.map( (data) => {
        return(
        <>
          
          <Item key={data.desc} info={data}>
          
          </Item> 
          
       
          <br />
          
          </>
        )
      })}
      
    </Box>
  );
}

export default ItemList;