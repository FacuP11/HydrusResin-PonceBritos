import React from "react";
import { Box } from "@mui/system";
import Item from "../Item/Item";
import  items  from '../productos';


function ItemList({data}) {
  

  return (
    <Box sh={{
      display:'flex'
    }}>
      <h2> Productos </h2>
      {data.map( (prod) => {
        return(
        <>
          
          <Item key={prod.id} info={prod} {...prod} />
          <br />
          
          </>
        )
      })}
      
    </Box>
  );
}

export default ItemList;