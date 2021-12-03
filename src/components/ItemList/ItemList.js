import React from "react";

import Item from "../Item/Item";
import  items  from '../productos';



function ItemList() {


  return (
    <div>
      {items.map( (data) => {
        return(
        <>
          
          <Item key={data.desc} info={data}>
          
          </Item> 
          
       
          <br />
          
          </>
        )
      })}
      
    </div>
  );
}

export default ItemList;