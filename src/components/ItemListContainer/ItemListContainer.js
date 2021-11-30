import React from "react";
import ItemList from '../ItemList/ItemList.js';
import { Box } from "@mui/system";


function ItemListContainer() {
  return (
    
      <Box
      sx={
        {
          margin: 10,
          display:'flex',
          justifyContent:'center'
        }
      }>
      <ItemList />
      </Box>
    

  );
}
export default ItemListContainer;

