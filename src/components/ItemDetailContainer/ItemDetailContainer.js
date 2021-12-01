import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import  items  from '../productos';

const data = items;

const getItem = (id) => {
    return new Promise (res => {
        res(data.find(data => data.id === id))
    })
}
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        setTimeout (()=>{    
            getItem(5)
            .then(res=> {
                setProduct(res)
            })
        },2000)
    }, [])

    return(
    <ItemDetail info={product}/>
    )
}



export default ItemDetailContainer;