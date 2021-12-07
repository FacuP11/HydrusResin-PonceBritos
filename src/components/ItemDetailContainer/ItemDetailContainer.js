import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import  items  from '../productos';
import { useParams } from "react-router";
const data = items;


const getId = (id) => {
    return new Promise (res => {
        res(data.find(data => data.id === Number(id)))
        })
}
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState (false);
    const {id} = useParams();
    
      useEffect(() => {
          setLoader(true) 
          setTimeout (()=>{
            getId(id)
            .then(res=> {
                setProduct(res)
                setLoader(false)
            }) 
        },2000)
    }, [])

    return(
        <>
        { loader ? <h2 > Cargando...</h2> : <ItemDetail info={product}/> }
    </>
    )
}



export default ItemDetailContainer;