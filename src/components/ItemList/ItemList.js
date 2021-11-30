import React from "react";
import Item from "../Item/Item";
import  items  from '../productos';



function ItemList() {


  return (
    <div>
      {items.map( (data) => {
        return(
        <>
          <Item key={data.id} info={data}/>
          <br />
          </>
        )
      })}
      
    </div>
  );
}

export default ItemList;