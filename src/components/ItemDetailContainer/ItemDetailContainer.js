import React, { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import  items  from '../productos';

const data = items;

const getItem = (id) => {
    return new Promise (res => {
        res(data.find(data => data.id === id))
    })
}
const ItemDetailContainer = () => {
    useEffect(() => {
        setTimeout (()=>{

        
        getItem(3)
        .then(res=> {
            console.log(res)
        },[])
        },2000)
    })
return(
<ItemDetail info={data}/>
)
}

export default ItemDetailContainer;